import styled from 'styled-components';

type CardProps = {
  flipped: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const CardShape = styled.button`
  position: relative;
  padding: 1em;
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
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

function Card({ flipped, onClick, children }: CardProps) {
  return (
    <CardShape disabled={flipped} onClick={onClick}>
      <CardInner style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
        <CardFace style={{ transform: 'rotateY(180deg)' }}>
          {children}
        </CardFace>
        <CardFace>
          ?
        </CardFace>
      </CardInner>
    </CardShape>
  );
}

export default Card;
