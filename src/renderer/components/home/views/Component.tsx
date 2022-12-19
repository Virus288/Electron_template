import React from 'react';
import * as animation from '../../../animation';
import { Container } from '../../../customs';

const Home: React.FC = () => {
  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <h2>Home page</h2>
    </Container>
  );
};

export default Home;
