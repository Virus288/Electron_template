import React, { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import Components from '../../index';
import * as enums from '../../../enums';
import Router from '../../../Router';
import { App as MainApp, Container } from '../../../customs';

const StaticHandlers: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  settings: boolean;
}> = ({ setTheme, settings, setSettings }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {settings ? <Components.Settings setTheme={setTheme} disableSettings={(): void => setSettings(false)} /> : null}
      </AnimatePresence>
    </>
  );
};

const ViewsController: React.FC<{
  setAppActive: React.Dispatch<React.SetStateAction<enums.EActiveAppStates>>;
  appActive: enums.EActiveAppStates;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ setAppActive, appActive, setTheme }) => {
  const [settings, setSettings] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 5000);
  });

  return !ready ? (
    <Container>
      <h2>Loading</h2>
    </Container>
  ) : (
    <>
      <Components.Popup />
      <MainApp>
        <StaticHandlers setTheme={setTheme} settings={settings} setSettings={setSettings} />
        <Components.Navbar setAppActive={setAppActive} appActive={appActive} setSettings={setSettings} />
        <Router />
      </MainApp>
    </>
  );
};

export default ViewsController;
