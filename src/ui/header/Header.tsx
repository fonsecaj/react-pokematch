import styled from 'styled-components';

const InnerHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 16px 18px 16px 24px;
`;

function Header({ children }: { children: React.ReactNode }) {
  return (
    <InnerHeader>
      {children}
    </InnerHeader>
  );
}

export default Header;
