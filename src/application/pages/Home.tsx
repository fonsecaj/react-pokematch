import { motion, useTime, useTransform } from 'motion/react';
import styled from 'styled-components';

import { POKEMON_SPRITE_COORDINATES } from '@domain/constants';
import { useSoundClick } from '@domain/hooks/useSoundClick';
import { useStore } from '@domain/hooks/useStore';
import Box from '@ui/box/Box';
import MenuItem from '@ui/menu-item/MenuItem';

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  padding: var(--spacing-sm) var(--spacing-xs);
`;

const HomeSpriteWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

const HomeMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg) 0 var(--spacing-xxxl) 0;
  width: 100%;
`;

const AnimatedSprite = styled(motion.div)`
  display: inline-block;
  position: relative;
  width: 56px;
  height: 56px;
  background-image: url('/sprite.png');
  image-rendering: pixelated;
  transform: scale(2);
`;

export default function Home() {
  const allBackgroundPositions = Object.values(POKEMON_SPRITE_COORDINATES);
  const startGame = useStore((state) => state.startGame);
  const { play } = useSoundClick();
  const time = useTime();
  const backgroundPosition = useTransform(time, t => allBackgroundPositions[Math.floor(t / 500) % allBackgroundPositions.length]);

  function handleNewGame() {
    play();
    startGame();
  }

  return (
    <HomeContainer>
      <HomeSpriteWrapper>
        <AnimatedSprite
          style={{ backgroundPosition }}
        />
        <motion.img
          src="/pokeball.png"
          alt="Pokéball"
          width="48"
          animate={{
            y: [0, 5, 5, 5, 0],
            rotate: [25, 25, 0, -25, -25],
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.325,
            repeat: Infinity,
            repeatType: 'reverse',
            bounce: 1,
          }}
        />
      </HomeSpriteWrapper>

      <HomeMenu>
        <MenuItem onClick={handleNewGame}>New game</MenuItem>
      </HomeMenu>
    </HomeContainer>
  );
}
