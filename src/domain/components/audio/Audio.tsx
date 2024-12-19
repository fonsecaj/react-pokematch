import { useCallback, useEffect, useRef } from 'react';

import { useStore } from '@domain/hooks/useStore';

function Audio() {
  const gameStatus = useStore.use.gameStatus();
  const ref = useRef<HTMLAudioElement>(null);

  const play = useCallback(() => {
    if (!ref.current) {
      return;
    }

    let src = '/home.mp3';

    switch (gameStatus) {
      case 'idle':
        src = '/home.mp3';
        break;

      case 'playing':
        src = '/game.mp3';
        break;

      case 'won':
        src = '/win.mp3';
        break;

      case 'lost':
        src = '/lose.mp3';
        break;
    }

    ref.current.src = src;
    ref.current.currentTime = 0;
    ref.current.volume = 0.5;
    ref.current.loop = gameStatus === 'idle' || gameStatus === 'playing';
    ref.current?.play().catch(() => null);
  }
  , [gameStatus]);

  useEffect(() => play(), [play]);

  useEffect(() => {
    const playOnUserGestureCallback = () => {
      ref.current?.play()
        .then(() => removeListeners())
        .catch(() => null);
    };

    function addListeners() {
      document.addEventListener('mouseover', playOnUserGestureCallback);
      document.addEventListener('touchstart', playOnUserGestureCallback);
    }

    function removeListeners() {
      document.removeEventListener('mouseover', playOnUserGestureCallback);
      document.removeEventListener('touchstart', playOnUserGestureCallback);
    }

    addListeners();

    return () => removeListeners();
  }, []);

  return (
    <audio ref={ref} />
  );
}

export default Audio;
