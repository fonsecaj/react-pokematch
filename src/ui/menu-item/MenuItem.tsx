import styled from 'styled-components';

const MenuItem = styled.button`
  position: relative;
  font-family: Pokemon GB;
  font-size: 1em;
  background: none;
  border: none;
  padding: 0 0 0 1em;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
  line-height: 20px;
  appearance: none;
  color: var(--color-foreground);

  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    width: 2px;
    height: 2px;
    font-size: 2px;
    color: var(--color-foreground);
    box-shadow: 1em 0 var(--color-foreground),2em 0 var(--color-foreground),1em 1em var(--color-foreground),2em 1em var(--color-foreground),3em 1em var(--color-foreground),1em 2em var(--color-foreground),2em 2em var(--color-foreground),3em 2em var(--color-foreground),4em 2em var(--color-foreground),1em 3em var(--color-foreground),2em 3em var(--color-foreground),3em 3em var(--color-foreground),4em 3em var(--color-foreground),5em 3em var(--color-foreground),1em 4em var(--color-foreground),2em 4em var(--color-foreground),3em 4em var(--color-foreground),4em 4em var(--color-foreground),1em 5em var(--color-foreground),2em 5em var(--color-foreground),3em 5em var(--color-foreground),1em 6em var(--color-foreground),2em 6em var(--color-foreground);
  }
`;

export default MenuItem;
