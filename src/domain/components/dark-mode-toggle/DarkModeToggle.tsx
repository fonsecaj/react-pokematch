import styled from 'styled-components';

import { useDarkMode } from '@domain/hooks/useDarkMode';
import { useSoundClick } from '@domain/hooks/useSoundClick';
import Icon from '@ui/icon/Icon';

const DarkModeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  appearance: none;
  color: var(--color-foreground);
`;

export default function DarkModeToggle() {
  const [isDarkMode, { enable, disable }] = useDarkMode();
  const { play } = useSoundClick();

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
