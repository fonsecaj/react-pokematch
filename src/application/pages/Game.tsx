import Timer from '@domain/features/timer/Timer';
import { useCards } from '@domain/hooks/useCards';
import Card from '@ui/card/Card';
import Grid from '@ui/grid/Grid';
import styled from 'styled-components';

const GameContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  padding: 8px 6px;
`;

function Game() {
  const [cards] = useCards();

  return (
    <GameContainer>
      <Timer />
      <Grid>
        {cards.map(card => (
          <Card
            key={card.id}
            flipped={false}
            onClick={() => console.log(card)}
          >
            {card.name}
          </Card>
        ))}
      </Grid>
    </GameContainer>
  );
}

export default Game;
