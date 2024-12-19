import { useMemo } from 'react';
import styled from 'styled-components';

type ProgressBarProps = {
  value: number;
  max: number;
};

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-lg);
`;

const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: var(--spacing-md);
  border-right: 4px solid var(--color-foreground);
  border-bottom: 4px solid var(--color-foreground);
  width: 50%;
  text-align: right;
  padding: var(--spacing-xs) var(--spacing-sm);
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
    color: var(--color-foreground);
    box-shadow: 4em 1em var(--color-foreground), 5em 1em var(--color-foreground), 4em 0 var(--color-foreground), 5em 0 var(--color-foreground), 3em 0 var(--color-foreground), 2em 0 var(--color-foreground), 4em -1em var(--color-foreground), 5em -1em var(--color-foreground), -2em 2em var(--color-foreground), -1em 2em var(--color-foreground);
  }
`;

const Progress = styled.progress`
  width: calc(100% - var(--spacing-lg));
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

let uniqueId = 0;

export default function ProgressBar({ value, max }: ProgressBarProps) {
  const id = useMemo(() => {
    uniqueId += 1;
    return `progress-bar-${uniqueId}`;
  }, []);

  return (
    <ProgressBarContainer>
      <ProgressContainer>
        <label htmlFor={id}>
          {value}/{max}
        </label>

        <Progress
          id={id}
          max={max}
          value={value}
        >
          {value}
        </Progress>
      </ProgressContainer>
    </ProgressBarContainer>
  );
}
