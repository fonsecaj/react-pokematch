import { POKEMON_SPRITE_COORDINATES } from './POKEMON_SPRITE_COORDINATES';

export const POKEMON_NAMES = Object.keys(POKEMON_SPRITE_COORDINATES) as readonly (keyof typeof POKEMON_SPRITE_COORDINATES)[];
