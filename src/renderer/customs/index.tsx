import React from 'react';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import * as localTypes from '../types/theme';
import * as enums from '../enums';

export const Button = styled(motion.button)<localTypes.IDefaultChildren>`
  background: linear-gradient(
    140deg,
    ${(props): string => props.theme.colors.ohOrange} 0.5%,
    ${(props): string => props.theme.background.semiTransparent} 0.5%
  );
  background-size: 100% 100%;
  color: ${(props): string => props.theme.colors.default};
  font-size: 1.5em;
  padding: 3px;
  margin: 10px 0;
  border: 2px solid ${(props): string => props.theme.colors.ohOrange};
  border-radius: 5%;
  box-shadow: 2px 2px 5px ${(props): string => props.theme.shadows.black};
  width: 80%;
  min-width: 150px;
  max-width: 300px;
  height: 45px;
  transition: ${(props): string => props.theme.transition.default};
  font-weight: lighter;
  letter-spacing: 0.9px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    transition: ${(props): string => props.theme.transition.default};
    background-size: 30000% 100%;
  }
`;

export const Container = styled(motion.div)<localTypes.IDefaultChildren>`
  width: 100%;
  height: 100vh;
  padding: 5px;
  color: ${(props): string => props.theme.colors.default};
`;

export const FullPageContainer = styled(motion.div)<localTypes.IDefaultChildren>`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${(props): string => props.theme.background.semiTransparent};
  z-index: 9;
`;

export const ExitButton = styled('button')<localTypes.IDefaultChildren>`
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2.3em;
  color: ${(props): string => props.theme.colors.ohOrange};
  background: none;
  border: none;
  margin: 5px;
  padding: 0.25em 1em;
  cursor: pointer;
  z-index: 9;
`;

export const App = styled(motion.div)<localTypes.IDefaultChildren>`
  background: ${(props): string => props.theme.background.default};
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.slow};
  padding-left: ${(props): number => {
    switch (props.theme.appState) {
      case enums.EActiveAppStates.Active:
        return 150;
      case enums.EActiveAppStates.SemiActive:
        return 75;
      case enums.EActiveAppStates.Inactive:
      default:
        return 0;
    }
  }}px;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    background: white;
    font-family: "JetBrains Mono ExtraLight", serif;
  }
`;

export const Theme: React.FC<{
  children: React.ReactNode;
  theme: DefaultTheme;
  appState: enums.EActiveAppStates;
}> = ({ children, theme, appState }) => {
  const th = { ...theme, appState };
  return <ThemeProvider theme={th}>{children}</ThemeProvider>;
};
