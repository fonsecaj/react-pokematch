import styled from 'styled-components';

type FlipCountdownProps = {
  value: number;
};

const FlipCountdownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0 16px;
`;

const FlipCountdownInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 12px;
  border-right: 4px solid #181010;
  border-bottom: 4px solid #181010;
  width: 200px;
  text-align: right;
  padding: 6px 8px;
  box-sizing: border-box;


  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-block;
    content: "";
    width: 2px;
    height: 2px;
    font-size: 2px;
    color: #181010;
    box-shadow: 4em 1em #181010, 5em 1em #181010, 4em 0 #181010, 5em 0 #181010, 3em 0 #181010, 2em 0 #181010, 4em -1em #181010, 5em -1em #181010, -2em 2em #181010, -1em 2em #181010;
  }
`;

const FlipCountdownProgress = styled.progress`
  position: relative;
  height: 4px;
  border: 2px solid transparent;
  border-image-slice: 1;
  border-image-width: 2px;
  border-block: 0;
  border-image-outset: 2px 0 2px 0;
  border-image-repeat: stretch stretch;
  border-image-source: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAYAAABLLYUHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNWRHWFIAAAAfSURBVBhXY/j//z+DhIAAkPrPAGeAaFQOjPH//38GAJDaGTlUem+VAAAAAElFTkSuQmCC);
  background: none;
  background-clip: padding-box;
  color: #555;
  background-color: #fff;
  &::-moz-progress-bar {
    background: #555;
  }
  &::-webkit-progress-value {
    background: #555;
  }
  &::-webkit-progress-bar {
    background-color: #fff;
    width: 100%;
  }
`;

function FlipCountdown({ value }: FlipCountdownProps) {
  return (
    <FlipCountdownWrapper>
      <FlipCountdownInner>

        <label htmlFor="countdown">{value}/30</label>
        <FlipCountdownProgress id="countdown" max="30" value={value}>{value}</FlipCountdownProgress>

      </FlipCountdownInner>
    </FlipCountdownWrapper>
  );
}

export default FlipCountdown;
