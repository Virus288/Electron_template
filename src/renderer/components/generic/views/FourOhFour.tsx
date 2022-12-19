import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as animation from '../../../animation';
import { Button, Container } from '../../../customs';

const FourOhFour: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <span>
        <header>Four oh four</header>
        <Button type="button" className="mainButton" onClick={(): void => navigate('/')}>
          Take me home
        </Button>
      </span>
    </Container>
  );
};

export default FourOhFour;
