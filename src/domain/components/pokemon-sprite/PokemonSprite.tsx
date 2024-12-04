import styled from 'styled-components';

import { POKEMON_SPRITE_COORDINATES } from '@domain/constants';
import { PokemonName } from '@domain/models';

type PokemonSpriteProps = {
  name: PokemonName;
};

const PokemonSpriteContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 56px;
  height: 56px;
  background-image: url('/sprite.png');
  image-rendering: pixelated;
  transform: scale(2);

  @media only screen and (max-width: 600px) {
    transform: none;
  }
`;

function PokemonSprite({ name }: PokemonSpriteProps) {
  const backgroundPosition = POKEMON_SPRITE_COORDINATES[name];

  return (
    <PokemonSpriteContainer style={{ backgroundPosition }} />
  );
}

export default PokemonSprite;
