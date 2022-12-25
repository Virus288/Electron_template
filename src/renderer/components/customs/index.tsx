import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import * as enums from '../../enums';

export * from './buttons';
export * from './generic';
export * from './containers';
export * from './forms';

const Theme: React.FC<{
  children: React.ReactNode;
  theme: DefaultTheme;
  appState: enums.EActiveAppStates;
}> = ({ children, theme, appState }) => {
  const th = { ...theme, appState };
  return <ThemeProvider theme={th}>{children}</ThemeProvider>;
};

export default Theme;
