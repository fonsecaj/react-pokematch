import styled from 'styled-components';

import { useAudio } from '@domain/hooks/useAudio';
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
  const gameStatus = useStore.use.gameStatus();
  const startGame = useStore.use.startGame();
  const exitGame = useStore.use.exitGame();
  const [, { play }] = useAudio('/click.mp3', { volume: 0.5 });

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
