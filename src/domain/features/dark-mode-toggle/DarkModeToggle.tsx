import { useDarkMode } from '@domain/hooks/useDarkMode';
import Icon from '@ui/icon/Icon';
import styled from 'styled-components';

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

function DarkModeToggle() {
  const [isDarkMode, { enable, disable }] = useDarkMode();

  return (
    <IconButton onClick={() => isDarkMode ? disable() : enable()}>
      <Icon name={isDarkMode ? 'dark-mode' : 'light-mode'} />
    </IconButton>
  );
}

export default DarkModeToggle;
