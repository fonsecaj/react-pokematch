import styled from 'styled-components';

import Audio from '@domain/components/audio/Audio';
import DarkModeToggle from '@domain/components/dark-mode-toggle/DarkModeToggle';
import Timer from '@domain/components/timer/Timer';
import { useStore } from '@domain/hooks/useStore';
import AnimatedText from '@ui/animated-text/AnimatedText';
import Header from '@ui/header/Header';

import Game from './pages/Game';
import Home from './pages/Home';

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
  padding-top: var(--spacing-xs);
`;

export default function App() {
  const gameStatus = useStore(state => state.gameStatus);

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
