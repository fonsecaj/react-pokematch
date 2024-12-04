import DarkModeToggle from '@domain/components/dark-mode-toggle/DarkModeToggle';
import Game from './pages/Game';

import { useStore } from '@domain/hooks/useStore';
import Header from '@ui/header/Header';
import styled from 'styled-components';
import Home from './pages/Home';
import Timer from '@domain/components/timer/Timer';
import Audio from '@domain/components/audio/Audio';
import AnimatedText from '@ui/animated-text/AnimatedText';

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
    <>
      <Main>
        <Header>
          {gameStatus === 'idle'
            ? (
                <Brand href="/">
                  <AnimatedText text="POKÉMATCH" />
                </Brand>
              )
            : <Timer />}
          <DarkModeToggle />
        </Header>

        {gameStatus === 'idle' ? <Home /> : <Game />}

      </Main>
      <Audio />
    </>
  );
}

export default App;
