import styled from 'styled-components';

type TimerProps = {
  value: number;
};

const TimerContainer = styled.div`
  padding: 0 18px;
`;

function Timer({ value }: TimerProps) {
  const minutes = Math.floor(value / 600);
  const seconds = Math.floor((value % 600) / 10);
  const centiseconds = value % 10;

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds}`;

  return (
    <TimerContainer>{formattedTime}</TimerContainer>
  );
}

export default Timer;
