import styled from 'styled-components';

const InnerHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 16px 18px 16px 24px;
`;

const Brand = styled.a`
  color: inherit;
  text-decoration: none;
  line-height: 28px;
  padding-top: 6px;
`;

function Header({ children }: { children: React.ReactNode }) {
  return (
    <InnerHeader>
      <Brand href="/">POKÉMATCH</Brand>
      {children}
    </InnerHeader>
  );
}

export default Header;
