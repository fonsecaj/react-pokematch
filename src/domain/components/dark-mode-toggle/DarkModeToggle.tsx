import { useAudio } from '@domain/hooks/useAudio';
import { useDarkMode } from '@domain/hooks/useDarkMode';
import Icon from '@ui/icon/Icon';
import styled from 'styled-components';

const DarkModeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

function DarkModeToggle() {
  const [isDarkMode, { enable, disable }] = useDarkMode();
  const [, { play }] = useAudio('/click.mp3', { volume: 0.5 });

  function handleClick() {
    play();

    if (isDarkMode) {
      disable();
    }
    else {
      enable();
    }
  }

  return (
    <DarkModeToggleButton onClick={handleClick}>
      <Icon name={isDarkMode ? 'dark-mode' : 'light-mode'} />
    </DarkModeToggleButton>
  );
}

export default DarkModeToggle;