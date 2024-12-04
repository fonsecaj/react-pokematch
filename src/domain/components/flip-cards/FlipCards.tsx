import { useStore } from '@domain/hooks/useStore';
import { PokemonFlipCard } from '@domain/models';
import Card from '@domain/components/card/Card';
import Grid from '@ui/grid/Grid';
import PokemonSprite from '../pokemon-sprite/PokemonSprite';
import { useAudio } from '@domain/hooks/useAudio';

function FlipCards() {
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
        <Card
          key={card.id}
          flipped={gameStatus !== 'playing' || matchedCardIds.includes(card.id) || firstPairCard === card || secondPairCard === card}
          onClick={() => handleFlip(card)}
        >
          <PokemonSprite name={card.name} />
        </Card>
      ))}
    </Grid>
  );
}
export default FlipCards;
