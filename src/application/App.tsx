import DarkModeToggle from '@domain/features/dark-mode-toggle/DarkModeToggle';
import Game from './pages/Game';

import Header from '@ui/header/Header';
import styled from 'styled-components';

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <Main>
      <Header>
        <DarkModeToggle />
      </Header>
      <Game />
    </Main>
  );
}

export default App;
