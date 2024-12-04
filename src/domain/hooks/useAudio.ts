import { useCallback, useEffect, useRef } from 'react';

type UseAudioOptions = {
  volume?: number;
  playbackRate?: number;
};

type UseAudioControllers = {
  play: () => void;
};

export function useAudio(src: string, { volume = 1, playbackRate = 1 }: UseAudioOptions): [HTMLAudioElement, UseAudioControllers] {
  const audio = useRef(new Audio(src));

  useEffect(() => {
    audio.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    audio.current.playbackRate = playbackRate;
  }, [playbackRate]);

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

  return [audio.current, { play }];
}
