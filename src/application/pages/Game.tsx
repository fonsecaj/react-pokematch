import Timer from '@ui/timer/Timer';
import { useCards } from '@domain/hooks/useCards';
import { useMatchingCards } from '@domain/hooks/useMatchingCards';
import { useTimer } from '@domain/hooks/useTimer';
import Box from '@ui/box/Box';
import Card from '@ui/card/Card';
import Grid from '@ui/grid/Grid';
import MenuItem from '@ui/menu-item/MenuItem';
import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import FlipCountdown from '@ui/flip-countdown/FlipCountdown';
import { Card as ICard } from '@domain/types/Card';

const GameContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 1rem;
  padding: 8px 6px;
`;

const GameMessage = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;


`;

function Game() {
  const [flipCountdown, setFlipCountdown] = useState(30);
  const [cards, { shuffle }] = useCards();
  const [flippedCards, { flip, unflipAll }] = useMatchingCards();
  const [time, { start, stop, reset }] = useTimer();

  const canFlip = flippedCards.length < cards.length && flipCountdown > 0;

  const restart = useCallback(() => {
    reset();
    unflipAll();
    setFlipCountdown(30);
    shuffle();
  }, [reset, unflipAll, setFlipCountdown, shuffle]);

  const makeFlip = useCallback((card: ICard) => {
    if (!canFlip) return;

    flip(card);
    setFlipCountdown(countdown => countdown - 1);
  }, [flip, setFlipCountdown, canFlip]);

  const grid = useMemo(() => (
    <>
      <FlipCountdown value={flipCountdown} />
      <Grid>
        {cards.map(card => (
          <Card
            key={card.id}
            flipped={flippedCards.includes(card.id) || !canFlip}
            onClick={() => makeFlip(card)}
          >
            {card.name}
          </Card>
        ))}
        {
          flippedCards.length === cards.length
            ? (
                <GameMessage>
                  <p>You win!</p>
                  <MenuItem onClick={restart}>Restart</MenuItem>
                  <MenuItem>Exit</MenuItem>
                </GameMessage>
              )
            : null
        }
        {
          !canFlip && flippedCards.length !== cards.length
            ? (
                <GameMessage>
                  <p>You lose!</p>
                  <MenuItem onClick={restart}>Retry</MenuItem>
                  <MenuItem>Exit</MenuItem>
                </GameMessage>
              )
            : null
        }
      </Grid>
    </>
  ), [cards, flippedCards, flipCountdown, canFlip, restart, makeFlip]);

  useEffect(() => {
    if (canFlip) {
      start();
    }
    else {
      stop();
    }
  }, [start, stop, canFlip]);

  return (
    <GameContainer>
      <Timer value={time} />
      {grid}
    </GameContainer>
  );
}

export default Game;
