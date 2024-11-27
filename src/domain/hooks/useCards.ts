import { Card } from '@domain/types/Card';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type CardsController = {};

export function useCards(): [Card[], CardsController] {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const cards: Card[] = Array.from({ length: 12 }, (_, index) => ({
      id: crypto.randomUUID(),
      name: `${index >= 6 ? index - 5 : index + 1}`,
    }));

    setCards(cards.sort(() => Math.random() - 0.5));
  }, []);

  return [cards, {}];
}
