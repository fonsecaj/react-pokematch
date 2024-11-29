import { PokemonName } from './PokemonName';

export type PokemonFlipCard = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: PokemonName;
};
