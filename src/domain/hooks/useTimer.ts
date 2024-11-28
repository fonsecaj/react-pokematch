import { useCallback, useEffect, useState } from 'react';

type TimerControllers = {
  start: () => void;
  stop: () => void;
  reset: () => void;
};

export function useTimer(): [number, TimerControllers] {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setTime(0);
  }, []);

  useEffect(() => {
    let interval: number | undefined = undefined;

    if (isActive) {
      interval = setInterval(() => {
        setTime(t => t + 1);
      }, 100);
    }
    else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return [time, { start, stop, reset }];
}
