import 'styled-components';
import { Variants } from 'framer-motion';
import * as enums from '../enums';

declare module 'styled-components' {
  interface DefaultTheme {
    appState: enums.EActiveAppStates;
    themeState: enums.EThemes;
    colors: {
      ohOrange: string;
      ohAlmostOrange: string;
      default: string;
      semiDefault: string;
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
  variants?: Variants;
}
