import React, { ReactNode } from 'react';

import styled from 'styled-components/macro';

interface Props {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <Container className={className}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  direction: rtl;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-gray5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const PageContentContainer = styled.section`
  width: 100%;
  max-width: var(--max-width-page);
  margin: 0 auto;
`;
export default Layout;
