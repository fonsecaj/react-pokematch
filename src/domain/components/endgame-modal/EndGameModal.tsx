import styled from 'styled-components';

import { useSoundClick } from '@domain/hooks/useSoundClick';
import { useStore } from '@domain/hooks/useStore';
import AnimatedText from '@ui/animated-text/AnimatedText';
import Box from '@ui/box/Box';
import MenuItem from '@ui/menu-item/MenuItem';

const Modal = styled(Box)`
  position: absolute;
  left: var(--spacing-xs);
  right: var(--spacing-xs);
  bottom: calc(var(--spacing-xs) - 1px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export default function EndGameModal() {
  const gameStatus = useStore((state) => state.gameStatus);
  const startGame = useStore((state) => state.startGame);
  const exitGame = useStore((state) => state.exitGame);
  const { play } = useSoundClick();

  function handleChoice(newGame: boolean) {
    play();

    if (newGame) {
      startGame();
    }
    else {
      exitGame();
    }
  }

  switch (gameStatus) {
    case 'won':
      return (
        <Modal>
          <p>
            <AnimatedText text="You win!" />
          </p>
          <MenuItem onClick={() => handleChoice(true)}>Restart</MenuItem>
          <MenuItem onClick={() => handleChoice(false)}>Exit</MenuItem>
        </Modal>
      );
    case 'lost':
      return (
        <Modal>
          <p>
            <AnimatedText text="You lose!" />
          </p>
          <MenuItem onClick={() => handleChoice(true)}>Retry</MenuItem>
          <MenuItem onClick={() => handleChoice(false)}>Exit</MenuItem>
        </Modal>
      );
    default:
      return null;
  }
}
