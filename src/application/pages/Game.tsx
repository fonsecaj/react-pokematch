import EndGameModal from '@domain/components/endgame-modal/EndGameModal';
import FlipCards from '@domain/components/flip-cards/FlipCards';
import FlipCountdown from '@domain/components/flip-countdown/FlipCountdown';
import styled from 'styled-components';

const GameContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  padding: 8px 6px;
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
