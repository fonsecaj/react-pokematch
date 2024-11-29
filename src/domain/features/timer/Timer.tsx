import { useStore } from '@domain/hooks/useStore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  padding: 0;
`;

function Timer() {
  const gameStartedAt = useStore.use.gameStartedAt();
  const gameEndedAt = useStore.use.gameEndedAt();
  const [now, setNow] = useState(gameStartedAt);

  function formatTimerValue(startTimestamp: number, timestamp = now) {
    const diff = timestamp ? timestamp - startTimestamp : 0;
    const value = Math.floor(diff / 100);
    const minutes = Math.floor(value / 600);
    const seconds = Math.floor((value % 600) / 10);
    const centiseconds = value % 10;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());

      if (gameEndedAt !== null) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [gameEndedAt]);

  if (gameStartedAt === null) {
    return null;
  }

  if (gameEndedAt === null) {
    return (
      <TimerContainer>
        {formatTimerValue(gameStartedAt)}
      </TimerContainer>
    );
  }

  return (
    <TimerContainer>
      {formatTimerValue(gameStartedAt, gameEndedAt)}
    </TimerContainer>
  );
}

export default Timer;
