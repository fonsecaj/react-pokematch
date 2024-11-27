import { useCallback, useEffect, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

type TimerControllers = {
  start: () => void;
  stop: () => void;
  reset: () => void;
  setTime: Dispatch<SetStateAction<number>>;
};

export function useTimer(initialValue?: number): [number, TimerControllers] {
  const [time, setTime] = useState(initialValue ?? 0);
  const [isActive, setIsActive] = useState(false);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setTime(initialValue ?? 0);
  }, [initialValue]);

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

  return [time, { start, stop, reset, setTime }];
}
