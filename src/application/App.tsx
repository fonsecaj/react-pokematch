import DarkModeToggle from '@domain/features/dark-mode-toggle/DarkModeToggle';
import Game from './pages/Game';

import { useStore } from '@domain/hooks/useStore';
import Header from '@ui/header/Header';
import styled from 'styled-components';
import Home from './pages/Home';
import Timer from '@domain/features/timer/Timer';

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Brand = styled.a`
color: inherit;
text-decoration: none;
line-height: 28px;
padding-top: 6px;
`;

function App() {
  const gameStatus = useStore.use.gameStatus();

  return (
    <Main>
      <Header>
        {gameStatus === 'idle' ? <Brand href="/">POKÉMATCH</Brand> : <Timer />}
        <DarkModeToggle />
      </Header>

      {gameStatus === 'idle' ? <Home /> : <Game />}
    </Main>
  );
}

export default App;
