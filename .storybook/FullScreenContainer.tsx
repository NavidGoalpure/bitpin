import React, { useContext } from "react";
import styled from "styled-components/macro";
import { themeContext } from "../src/Contexts/ThemeContext";
import { DarkStyle, LightStyle } from "../src/Styles/themeStyles";
import { ReactNode } from "react";
import { Theme } from "../src/Interfaces";

interface Props {
  children: ReactNode;
}
const FullScreenContainer: React.FC<Props> = ({ children }) => {
  const { theme, setTheme } = useContext(themeContext);
  const isLightTheme: boolean = theme === Theme.LIGHT;
  return <Container lightTheme={isLightTheme}>{children}</Container>;
};
const Container = styled.div<{ lightTheme: boolean }>`
  ${({ lightTheme }) => (lightTheme ? LightStyle : DarkStyle)};

  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: unset;
`;
export default FullScreenContainer;
