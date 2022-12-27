import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import * as animation from '../../../animation';
import * as renders from './Renderer';
import { ContainerBody, ExitButton, Header, OverlayContainer, PanelHeader } from '../../customs';

const Settings: React.FC<{
  disablePanel: () => void;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ disablePanel, setTheme }) => {
  const theme = useTheme();

  return (
    <OverlayContainer variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ExitButton onClick={(): void => disablePanel()}>
        <i className="icon-left-open-outline navIcon" />
      </ExitButton>
      <ContainerBody justify="flex-start">
        <PanelHeader center>Settings</PanelHeader>

        <Header>Theme</Header>
        <renders.Theme setTheme={setTheme} theme={theme} />
      </ContainerBody>
    </OverlayContainer>
  );
};

export default Settings;
