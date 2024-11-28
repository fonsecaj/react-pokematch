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

  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    width: 2px;
    height: 2px;
    font-size: 2px;
    color: #181010;
    box-shadow: 1em 0 #181010,2em 0 #181010,1em 1em #181010,2em 1em #181010,3em 1em #181010,1em 2em #181010,2em 2em #181010,3em 2em #181010,4em 2em #181010,1em 3em #181010,2em 3em #181010,3em 3em #181010,4em 3em #181010,5em 3em #181010,1em 4em #181010,2em 4em #181010,3em 4em #181010,4em 4em #181010,1em 5em #181010,2em 5em #181010,3em 5em #181010,1em 6em #181010,2em 6em #181010;
  }
`;

export default MenuItem;
