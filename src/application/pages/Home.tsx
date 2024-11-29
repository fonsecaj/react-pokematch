import { useAudioAutoplay } from '@domain/hooks/useAudioAutoplay';
import { useStore } from '@domain/hooks/useStore';
import Box from '@ui/box/Box';
import MenuItem from '@ui/menu-item/MenuItem';
import Sprite from '@ui/sprite/Sprite';
import { motion } from 'motion/react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  padding: 8px 6px;
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
  padding: 16px 0 32px 0;
  width: 100%;
`;

function Home() {
  const startGame = useStore.use.startGame();
  const audio = useAudioAutoplay('/home.mp3', { volume: 0.5 });

  function handleNewGame() {
    startGame();
    audio.pause();
  }

  return (
    <HomeContainer>
      <HomeSpriteWrapper>
        <Sprite name="all" scale={2} />
        <motion.img
          src="/pokeball.png"
          alt="Pokématch"
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

export default Home;
