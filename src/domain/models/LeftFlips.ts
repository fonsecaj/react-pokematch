import { MAX_USER_FLIP_COUNT } from '@domain/constants';

type Range<Limit extends number, Accumulator extends number[] = []> =
  Accumulator['length'] extends Limit ? Accumulator[number] : Limit | Range<Limit, [...Accumulator, Accumulator['length']]>;

export type LeftFlips = Range<typeof MAX_USER_FLIP_COUNT>;
