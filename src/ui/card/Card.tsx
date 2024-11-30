import styled from 'styled-components';

type CardProps = {
  flipped: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const CardShape = styled.button`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border: none;
  appearance: none;
  cursor: pointer;
  font-size: 2em;
  background-color: transparent;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBack = styled(CardFace)`
  text-transform: uppercase;
  text-align: left;
  text-indent: -1000em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNWRHWFIAAABoSURBVChTnY0xFsAgDEJzBMde0DNk6OHTl4GUoungwFPhg3aNEanbfUaEqZCldlwB3Uj6rKOB9DumfgDEYYpL7QCX8daTM/aXVS1CyDQ3BhSCxxnKNfAH6Qg8zj9lho4HAEC77L37fADeSVIEvrov7gAAAABJRU5ErkJggg==) 1em center no-repeat;
  background-size: 2rem;
`;

function Card({ flipped, onClick, children }: CardProps) {
  return (
    <CardShape disabled={flipped} onClick={onClick}>
      <CardInner style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
        <CardFace style={{ transform: 'rotateY(180deg)' }}>
          {children}
        </CardFace>
        <CardBack>
          PKMN
        </CardBack>
      </CardInner>
    </CardShape>
  );
}

export default Card;
