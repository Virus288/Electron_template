import React from 'react';
import * as renderer from './Renderer';
import { Container, ContainerBody, Header, PanelHeader } from '../../customs';
import * as animation from '../../../animation';
import Handler from '../handler';
import { useMainDispatch } from '../../../redux/hooks';

const Debug: React.FC = () => {
  const dispatch = useMainDispatch();
  const handler = new Handler(dispatch);

  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody justify="flex-start">
        <PanelHeader>Debug</PanelHeader>

        <Header>Notification</Header>
        <renderer.ToggleNotification handler={handler} />
      </ContainerBody>
    </Container>
  );
};

export default Debug;
