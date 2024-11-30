import PokemonSprite from '@domain/components/pokemon-sprite/PokemonSprite';
import { useStore } from '@domain/hooks/useStore';
import { PokemonFlipCard } from '@domain/models/PokemonFlipCard';
import Box from '@ui/box/Box';
import Card from '@ui/card/Card';
import FlipCountdown from '@ui/flip-countdown/FlipCountdown';
import Grid from '@ui/grid/Grid';
import MenuItem from '@ui/menu-item/MenuItem';
import { useMemo } from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
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
  const gameStatus = useStore.use.gameStatus();
  const leftFlips = useStore.use.leftFlips();
  const cards = useStore.use.cards();
  const matchedCardIds = useStore.use.matchedCardIds();
  const currentPairFlip = useStore.use.currentPairFlip();
  const flip = useStore.use.flip();
  const startGame = useStore.use.startGame();
  const exitGame = useStore.use.exitGame();
  const forcePairValidity = useStore.use.forcePairValidity();

  const flippedCardIds = useMemo(() => {
    const currentPairFlipIds: PokemonFlipCard['id'][] = [];

    if (currentPairFlip[0]) {
      currentPairFlipIds.push(currentPairFlip[0].id);
    }

    if (currentPairFlip[1]) {
      currentPairFlipIds.push(currentPairFlip[1].id);
    }

    return [
      ...matchedCardIds,
      ...currentPairFlipIds,
    ];
  }, [matchedCardIds, currentPairFlip]);

  function handleStartGame() {
    startGame();
  }

  function handleExitGame() {
    exitGame();
  }

  function handleFlip(card: PokemonFlipCard) {
    flip(card);

    if (currentPairFlip[0] !== null && currentPairFlip[1] === null && currentPairFlip[0].name !== card.name) {
      setTimeout(() => {
        forcePairValidity();
      }, 1000);
    }
  }

  return (
    <GameContainer>
      <FlipCountdown value={leftFlips} />
      <Grid>
        {cards.map(card => (
          <Card
            key={card.id}
            flipped={flippedCardIds.includes(card.id) || gameStatus !== 'playing'}
            onClick={() => handleFlip(card)}
          >
            <PokemonSprite name={card.name} />
          </Card>
        ))}
        {(() => {
          switch (gameStatus) {
            case 'won':
              return (
                <GameMessage>
                  <p>You win!</p>
                  <MenuItem onClick={handleStartGame}>Restart</MenuItem>
                  <MenuItem onClick={handleExitGame}>Exit</MenuItem>
                </GameMessage>
              );
            case 'lost':
              return (
                <GameMessage>
                  <p>You lose!</p>
                  <MenuItem onClick={handleStartGame}>Retry</MenuItem>
                  <MenuItem onClick={handleExitGame}>Exit</MenuItem>
                </GameMessage>
              );
            default:
              return null;
          }
        })()}
      </Grid>
    </GameContainer>
  );
}

export default Game;
