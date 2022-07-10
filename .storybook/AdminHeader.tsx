import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { themeContext } from '../src/Contexts/ThemeContext';

import { DarkStyle, LightStyle } from '../src/Styles/themeStyles';
import { Theme } from '../src/Interfaces';

const AdminHeader: React.FC = () => {
  const { theme: _theme, setTheme } = useContext(themeContext);
  const isLightTheme: boolean = _theme === Theme.LIGHT;
  //

  return (
    <Container>
      <Divider lightTheme={isLightTheme} />
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 0;
  padding-top: 1rem;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Divider = styled.div<{ lightTheme: boolean }>`
  ${({ lightTheme }) => (lightTheme ? LightStyle : DarkStyle)};
  height: 2px;
  margin-top: 1rem;
`;
export default AdminHeader;
