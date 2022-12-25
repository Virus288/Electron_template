import 'styled-components';
import * as enums from '../enums';

declare module 'styled-components' {
  interface DefaultTheme {
    appState: enums.EActiveAppStates;
    themeState: enums.EThemes;
    colors: {
      ohOrange: string;
      ohAlmostOrange: string;
      default: string;
      opposite: string;
    };
    background: {
      default: string;
      semiTransparent: string;
      opposite: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    transition: {
      fast: string;
      default: string;
      semiSlow: string;
      slow: string;
    };

    shadows: {
      default: string;
      black: string;
    };
  }
}

/**
 * Animation variables
 */
export interface IDefaultChildren {
  variants?: Record<string, unknown>;
}
