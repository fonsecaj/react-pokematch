import DarkIcon from '../../assets/dark.svg?react';
import LightIcon from '../../assets/light.svg?react';

type IconProps = {
  name: 'sound-off' | 'sound-on' | 'dark-mode' | 'light-mode';
};

export default function Icon({ name }: IconProps) {
  switch (name) {
    case 'light-mode':
      return <LightIcon />;

    case 'dark-mode':
      return <DarkIcon />;

    default:
      return null;
  }
}
