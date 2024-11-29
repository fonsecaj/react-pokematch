import { motion, useTime, useTransform } from 'motion/react';
import styled from 'styled-components';

// Each sprite is 56x56 pixels and have a 1px padding
const SpriteCoordinates = new Map([
  /* 1:3 */ ['venusaur', '-115px -1px'],
  /* 1:6 */ ['charizard', '-286px -1px'],
  /* 1:9 */ ['blastoise', '-457px -1px'],
  /* 1:12 */ ['butterfree', '-628px -1px'],
  /* 1:15 */ ['beedrill', '-799px -1px'],
  /* 2:3 */ ['pidgeot', '-115px -58px'],
  /* 1:7 */ ['fearow', '-343px -58px'],
  /* 2:9 */ ['arbok', '-457px -58px'],
  /* 2:11 */ ['raichu', '-571px -58px'],
  /* 3:1 */ ['nidoqueen', '-1px -115px'],
  /* 3:4 */ ['nidoking', '-172px -115px'],
  /* 3:8 */ ['ninetales', '-400px -115px'],
  /* 3:12 */ ['golbat', '-628px -115px'],
  /* 3:15 */ ['vileplume', '-799px -115px'],
  /* 4:2 */ ['parasect', '-58px -172px'],
  /* 4:4 */ ['venomoth', '-172px -172px'],
  /* 4:8 */ ['persian', '-400px -172px'],
  /* 4:10 */ ['golduck', '-514px -172px'],
  /* 4:12 */ ['primeape', '-628px -172px'],
  /* 4:14 */ ['arcanine', '-742px -172px'],
  /* 5:2 */ ['poliwrath', '-58px -229px'],
  /* 5:5 */ ['alakazam', '-229px -229px'],
  /* 5:8 */ ['machamp', '-400px -229px'],
  /* 5:11 */ ['victreebel', '-571px -229px'],
  /* 6:3 */ ['rapidash', '-115px -286px'],
  /* 6:5 */ ['slowbro', '-229px -286px'],
  /* 6:10 */ ['dodrio', '-514px -286px'],
  /* 6:14 */ ['muk', '-742px -286px'],
  /* 7:1 */ ['cloyster', '-1px -343px'],
  /* 7:5 */ ['onix', '-229px -343px'],
  /* 7:11 */ ['exeggcute', '-628px -343px'],
  /* 8:1 */ ['hitmonlee', '-1px -400px'],
  /* 8:3 */ ['lickitung', '-115px -400px'],
  /* 8:5 */ ['weezing', '-229px -400px'],
  /* 8:14 */ ['seaking', '-742px -400px'],
  /* 9:3 */ ['scyther', '-115px -457px'],
  /* 9:7 */ ['pinsir', '-343px -457px'],
  /* 9:8 */ ['tauros', '-400px -457px'],
  /* 9:10 */ ['gyarados', '-514px -457px'],
  /* 9:11 */ ['lapras', '-571px -457px'],
  /* 10:7 */ ['aerodactyl', '-343px -514px'],
  /* 10:8 */ ['snorlax', '-400px -514px'],
  /* 10:9 */ ['articuno', '-457px -514px'],
  /* 10:10 */ ['zapdos', '-514px -514px'],
  /* 10:11 */ ['moltres', '-571px -514px'],
]);

type SpriteProps = {
  name: 'hitmonlee' | 'all';
  scale?: number;
};

const SpriteInner = styled(motion.div)`
  display: inline-block;
  position: relative;
  width: 56px;
  height: 56px;
  background-image: url('/sprite.png');
  image-rendering: pixelated;
`;

function Sprite({ name, scale }: SpriteProps) {
  const time = useTime();
  const backgroundPosition = useTransform(time, t => Array.from(SpriteCoordinates.values())[Math.floor(t / 500) % SpriteCoordinates.size]);
  // let backgroundPosition = '-1px -1px';

  // switch (name) {
  //   case 'hitmonlee':
  //     backgroundPosition = '-1px -400px';
  //     break;

  //   default:
  //     break;
  // }

  return (
    <SpriteInner
      style={{ backgroundPosition, transform: `scale(${scale ?? 1})` }}
    />
  );
}

export default Sprite;
