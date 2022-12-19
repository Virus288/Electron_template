import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import ViewsController from './components/generic/views/Static';
import { GlobalStyle, Theme } from './customs';
import * as enums from './enums';
import * as themes from './customs/theme';
import Communicator from './communication';

const App: React.FC = () => {
  const [appActive, setAppActive] = useState<enums.EActiveAppStates>(enums.EActiveAppStates.Active);
  const [theme, setTheme] = useState<DefaultTheme>(themes.lightTheme);

  return (
    <Theme theme={theme} appState={appActive}>
      <BrowserRouter>
        <Communicator />
        <GlobalStyle />
        <ViewsController appActive={appActive} setAppActive={setAppActive} setTheme={setTheme} />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
