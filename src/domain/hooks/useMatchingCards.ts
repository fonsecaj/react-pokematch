import { Card } from '@domain/types/Card';
import { useCallback, useEffect, useMemo, useReducer } from 'react';

type MatchingCardsState = {
  currentFlip: null | [Card, null] | [Card, Card] ;
  matched: Set<Card['id']>;
};

type MatchingCardsAction = {
  type: 'flip';
  payload: Card;
} | {
  type: 'validate_flip';
} | {
  type: 'clear_flip';
} | {
  type: 'reset';
};

const initialState: MatchingCardsState = {
  currentFlip: null,
  matched: new Set(),
};

function reducer(state: MatchingCardsState, action: MatchingCardsAction): MatchingCardsState {
  switch (action.type) {
    case 'flip':
      if (!state.currentFlip || !!state.currentFlip[1]) {
        return {
          ...state,
          currentFlip: [action.payload, null],
        };
      }
      return {
        ...state,
        currentFlip: [state.currentFlip[0], action.payload],
      };

    case 'validate_flip':
      if (!state.currentFlip || !state.currentFlip[1]) return state;

      return {
        ...state,
        currentFlip: null,
        matched: new Set([...state.matched, state.currentFlip[0].id, state.currentFlip[1].id]),
      };

    case 'clear_flip':
      return {
        ...state,
        currentFlip: null,
      };

    case 'reset': {
      return { ...initialState };
    }

    default:
      return state;
  }
}

export function useMatchingCards() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const flippedCards = useMemo(() => {
    return [...Array.from(state.matched), ...(state.currentFlip ? (state.currentFlip.filter(Boolean) as Card[]).map(({ id }) => id) : [])];
  }, [state.matched, state.currentFlip]);

  const flip = useCallback((card: Card) => {
    dispatch({ type: 'flip', payload: card });
  }, []);

  const unflipAll = useCallback(() => {
    dispatch({ type: 'reset' });
  }, []);

  useEffect(() => {
    if (!state.currentFlip || !state.currentFlip[1]) return;

    if (state.currentFlip[0].name !== state.currentFlip[1].name) {
      const timeout = setTimeout(() => {
        dispatch({ type: 'clear_flip' });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
    else {
      dispatch({ type: 'validate_flip' });
    }
  }, [state.currentFlip]);

  return [flippedCards, { flip, unflipAll }] as const;
}
