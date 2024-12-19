import FlipCard from '@domain/components/flip-card/FlipCard';
import { useSoundClick } from '@domain/hooks/useSoundClick';
import { useStore } from '@domain/hooks/useStore';
import { PokemonFlipCard } from '@domain/models';
import Grid from '@ui/grid/Grid';

export default function FlipCards() {
  const gameStatus = useStore(state => state.gameStatus);
  const cards = useStore(state => state.cards);
  const matchedCardIds = useStore(state => state.matchedCardIds);
  const [firstPairCard, secondPairCard] = useStore(state => state.currentPairFlip);
  const flip = useStore(state => state.flip);
  const forcePairValidity = useStore(state => state.forcePairValidity);
  const { play } = useSoundClick();

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
