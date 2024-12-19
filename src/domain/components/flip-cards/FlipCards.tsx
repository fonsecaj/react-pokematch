import FlipCard from '@domain/components/flip-card/FlipCard';
import { useAudio } from '@domain/hooks/useAudio';
import { useStore } from '@domain/hooks/useStore';
import { PokemonFlipCard } from '@domain/models';
import Grid from '@ui/grid/Grid';

export default function FlipCards() {
  const gameStatus = useStore.use.gameStatus();
  const cards = useStore.use.cards();
  const matchedCardIds = useStore.use.matchedCardIds();
  const [firstPairCard, secondPairCard] = useStore.use.currentPairFlip();
  const flip = useStore.use.flip();
  const forcePairValidity = useStore.use.forcePairValidity();
  const [, { play }] = useAudio('/click.mp3', { volume: 0.5 });

  function handleFlip(card: PokemonFlipCard) {
    play();
    flip(card);

    if (firstPairCard !== null && secondPairCard === null && firstPairCard.name !== card.name) {
      setTimeout(() => {
        forcePairValidity();
      }, 1000);
    }
  }

  return (
    <Grid>
      {cards.map(card => (
        <FlipCard
          name={card.name}
          key={card.id}
          flipped={gameStatus !== 'playing' || matchedCardIds.includes(card.id) || firstPairCard === card || secondPairCard === card}
          onClick={() => handleFlip(card)}
        />
      ))}
    </Grid>
  );
}
