import styled from 'styled-components';

import EndGameModal from '@domain/components/endgame-modal/EndGameModal';
import FlipCards from '@domain/components/flip-cards/FlipCards';
import FlipCountdown from '@domain/components/flip-countdown/FlipCountdown';

const GameContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: var(--spacing-lg);
  padding: var(--spacing-sm) var(--spacing-xs);
`;

function Game() {
  return (
    <GameContainer>
      <FlipCountdown />
      <FlipCards />
      <EndGameModal />
    </GameContainer>
  );
}

export default Game;
