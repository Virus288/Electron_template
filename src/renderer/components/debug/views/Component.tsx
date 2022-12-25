import React from 'react';
import * as renderer from './Renderer';
import { Container, ContainerBody, Header, PanelHeader } from '../../customs';
import * as animation from '../../../animation';

const Debug: React.FC = () => {
  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody justify="flex-start">
        <PanelHeader>Debug</PanelHeader>

        <Header>Random debug</Header>
        <renderer.RenderRandomDebug />
      </ContainerBody>
    </Container>
  );
};

export default Debug;
