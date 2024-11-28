import { Card } from '@domain/types/Card';
import { useCallback, useEffect, useState } from 'react';

type CardsController = {
  shuffle: () => void;
};

export function useCards(): [Card[], CardsController] {
  const [cards, setCards] = useState<Card[]>([]);

  const shuffle = useCallback(() => {
    setCards(cards => cards.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const cards: Card[] = Array.from({ length: 12 }, (_, index) => ({
      id: crypto.randomUUID(),
      name: `${index >= 6 ? index - 5 : index + 1}`,
    }));

    setCards(cards.sort(() => Math.random() - 0.5));
  }, []);

  return [cards, { shuffle }];
}
