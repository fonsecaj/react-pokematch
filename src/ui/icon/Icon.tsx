import LightIcon from '../../assets/light.svg?react';
import DarkIcon from '../../assets/dark.svg?react';
import SoundOffIcon from '../../assets/sound-off.svg?react';
import SoundOnIcon from '../../assets/sound-on.svg?react';

type IconProps = {
  name: 'sound-off' | 'sound-on' | 'dark-mode' | 'light-mode';
};

function Icon({ name }: IconProps) {
  switch (name) {
    case 'light-mode':
      return <LightIcon />;

    case 'dark-mode':
      return <DarkIcon />;

    case 'sound-off':
      return <SoundOffIcon />;

    case 'sound-on':
      return <SoundOnIcon />;

    default:
      return null;
  }
}

export default Icon;
