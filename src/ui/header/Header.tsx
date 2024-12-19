import styled from 'styled-components';

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: var(--spacing-lg) 2px 64px var(--spacing-sm);
  
  @media only screen and (max-width: 600px) {
    padding: var(--spacing-lg) var(--spacing-xl) var(--spacing-lg) var(--spacing-xxl);
  }
`;

export default Header;
