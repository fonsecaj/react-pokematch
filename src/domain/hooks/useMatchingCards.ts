import { useReducer } from 'react';

type MatchingCardsState = {
  currentFlip: null | [string, null] | [string, string] ;
  matched: Set<string>;
};

type MatchingCardsAction = {
  type: 'flip';
  payload: string;
} | {
  type: 'mark_as_matched';
  payload: string;
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

    case 'mark_as_matched':
      return {
        ...state,
        currentFlip: null,
        matched: new Set([...state.matched, action.payload]),
      };

    default:
      return state;
  }
}

const initialState: MatchingCardsState = {
  currentFlip: null,
  matched: new Set(),
};

export function useMatchingCards() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch] as const;
}
