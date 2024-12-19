import { useCallback, useEffect, useRef } from 'react';

type UseSoundClickControllers = {
  play: () => void;
};

export function useSoundClick(): UseSoundClickControllers {
  const audio = useRef(new Audio('/click.mp3'));

  useEffect(() => {
    audio.current.volume = 0.5;
  }, []);

  const play = useCallback(() => {
    try {
      if (audio.current.currentTime > 0) {
        audio.current.currentTime = 0;
      }

      audio.current.play();
    }
    // eslint-disable-next-line no-empty
    catch {}
  }, []);

  return { play };
}
