import React from 'react';
import * as animation from '../../../animation';
import { Button, ButtonLink, Container, ContainerBody, Header } from '../../customs';

const FourOhFour: React.FC = () => {
  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        <Header>Four oh four</Header>
        <Button type="button" className="mainButton">
          <ButtonLink to="/" replace>
            Take me home
          </ButtonLink>
        </Button>
      </ContainerBody>
    </Container>
  );
};

export default FourOhFour;
