import { create, StoreApi, UseBoundStore } from 'zustand';
import { combine } from 'zustand/middleware';

import { CARD_COUNT, MAX_USER_FLIP_COUNT, POKEMON_NAMES } from '@domain/constants';
import { GameStatus, LeftFlips, PokemonFlipCard } from '@domain/models';

type NullableTuple<T> = [null, null] | [T, null] | [T, T];

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(store.use as any)[k] = () => store(s => s[k as keyof typeof s]);
  }

  return store;
};

type State = {
  gameStatus: GameStatus;
  gameStartedAt: null | number;
  gameEndedAt: null | number;
  cards: PokemonFlipCard[];
  currentPairFlip: NullableTuple<PokemonFlipCard>;
  matchedCardIds: PokemonFlipCard['id'][];
  leftFlips: LeftFlips;
};

const initialState: State = {
  gameStatus: 'idle',
  gameStartedAt: null,
  gameEndedAt: null,
  cards: [],
  currentPairFlip: [null, null],
  matchedCardIds: [],
  leftFlips: MAX_USER_FLIP_COUNT,
};

const useStoreBase = create(
  combine(initialState, set => ({
    startGame: () => set({
      ...initialState,
      gameStatus: 'playing',
      gameStartedAt: Date.now(),
      cards: generateCards(),
    }),

    exitGame: () => set({
      ...initialState,
      gameStatus: 'idle',
    }),

    flip: (card: PokemonFlipCard) => set((state) => {
      if (state.gameStatus !== 'playing' || state.leftFlips === 0) {
        return state;
      }

      const currentPairFlip: NullableTuple<PokemonFlipCard> = state.currentPairFlip[0] === null || state.currentPairFlip[1] !== null
        ? [card, null]
        : [state.currentPairFlip[0], card];

      const leftFlips = state.leftFlips - 1 as LeftFlips;

      const matchedCardIds = currentPairFlip[0] !== null && currentPairFlip[0].name === currentPairFlip[1]?.name
        ? [...state.matchedCardIds, currentPairFlip[0].id, currentPairFlip[1].id]
        : state.matchedCardIds;

      if (matchedCardIds.length === state.cards.length) {
        return {
          gameStatus: 'won',
          gameEndedAt: Date.now(),
          currentPairFlip: [null, null],
          matchedCardIds,
          leftFlips,
        };
      }

      if (leftFlips === 0) {
        return {
          gameStatus: 'lost',
          gameEndedAt: Date.now(),
          currentPairFlip: [null, null],
          matchedCardIds,
          leftFlips,
        };
      }

      return {
        leftFlips,
        matchedCardIds,
        currentPairFlip,
      };
    }),

    forcePairValidity: () => set((state) => {
      const isPair = state.currentPairFlip[0] !== null && state.currentPairFlip[1] !== null;
      const invalidPair = isPair ? state.currentPairFlip[0]?.name !== state.currentPairFlip[1]?.name : false;

      return { currentPairFlip: invalidPair ? [null, null] : state.currentPairFlip };
    }),
  })),
);

function generateCards(): PokemonFlipCard[] {
  return [...POKEMON_NAMES]
    .sort(() => Math.random() - 0.5)
    .slice(0, CARD_COUNT / 2)
    .flatMap(name => ([name, name]))
    .map(name => ({
      id: crypto.randomUUID(),
      name,
    }))
    .sort(() => Math.random() - 0.5);
}

export const useStore = createSelectors(useStoreBase);
