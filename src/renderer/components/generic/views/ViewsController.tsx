import React, { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import * as enums from '../../../enums';
import { useMainDispatch } from '../../../redux/hooks';
import Components from '../../index';
import Router from '../../../Router';
import { App as MainApp, Container } from '../../customs';
import Notifications from '../../notifications/views/Component';
import { logIn } from '../../home/controller';

const StaticHandlers: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  settings: boolean;
}> = ({ setTheme, settings, setSettings }) => {
  return (
    <AnimatePresence mode="wait">
      {settings ? <Components.Settings setTheme={setTheme} disablePanel={(): void => setSettings(false)} /> : null}
    </AnimatePresence>
  );
};

const ViewsController: React.FC<{
  setAppActive: React.Dispatch<React.SetStateAction<enums.EActiveAppStates>>;
  appActive: enums.EActiveAppStates;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ setAppActive, appActive, setTheme }) => {
  const dispatch = useMainDispatch();
  const [settings, setSettings] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    logIn(dispatch);
    setTimeout(() => {
      // Simple way to show loading screen with no data
      setReady(true);
    }, 2000);
  }, [dispatch]);

  return !ready ? (
    <Container>
      <h2>Loading</h2>
    </Container>
  ) : (
    <>
      <Components.Communicator />
      <Notifications />
      <MainApp id="app">
        <StaticHandlers setTheme={setTheme} settings={settings} setSettings={setSettings} />
        <Components.Navbar setAppActive={setAppActive} appActive={appActive} setSettings={setSettings} />
        <Router />
      </MainApp>
    </>
  );
};

export default ViewsController;
