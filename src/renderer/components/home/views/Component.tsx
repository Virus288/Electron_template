import React, { useEffect } from 'react';
import * as animation from '../../../animation';
import { Container, ContainerBody } from '../../customs';
import { logIn } from '../controller';
import { useMainDispatch } from '../../../redux/hooks';

const Home: React.FC = () => {
  const dispatch = useMainDispatch();

  useEffect(() => {
    logIn(dispatch);
  });

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        <h2>Home page</h2>
      </ContainerBody>
    </Container>
  );
};

export default Home;
