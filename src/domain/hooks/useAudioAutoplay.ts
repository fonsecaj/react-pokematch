import { useEffect } from 'react';
import { useAudio } from './useAudio';

type UseAudioAutoplayOptions = {
  volume?: number;
  playbackRate?: number;
};

export function useAudioAutoplay(src: string, { volume = 1, playbackRate = 1 }: UseAudioAutoplayOptions) {
  const [audio] = useAudio(src, { volume, playbackRate });

  useEffect(() => {
    function play() {
      audio.play()
        .then(() => removeListeners())
        .catch(() => null);
    }

    play();

    const playCallback = () => play();

    function addListeners() {
      document.addEventListener('mouseover', playCallback);
      document.addEventListener('touchstart', playCallback);
    }

    function removeListeners() {
      document.removeEventListener('mouseover', playCallback);
      document.removeEventListener('touchstart', playCallback);
    }

    addListeners();

    return () => removeListeners();
  }, [audio]);

  return audio;
}
