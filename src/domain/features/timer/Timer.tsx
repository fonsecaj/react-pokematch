import { useTimer } from '@domain/hooks/useTimer';
import { useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  padding: 8px 18px;
  `;

function Timer() {
  const [time, { start }] = useTimer();

  useEffect(() => {
    start();
  }, [start]);

  const minutes = Math.floor(time / 600);
  const seconds = Math.floor((time % 600) / 10);
  const centiseconds = time % 10;

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds}`;

  return (
    <TimerContainer>{formattedTime}</TimerContainer>
  );
}

export default Timer;
