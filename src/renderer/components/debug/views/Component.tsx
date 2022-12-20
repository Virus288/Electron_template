import React from 'react';
import { useMainDispatch } from '../../../redux/hooks';
import * as hooks from '../../../redux';
import * as types from '../../../redux/types';
import { Button, Container } from '../../../customs';
import * as animation from '../../../animation';

const Debug: React.FC = () => {
  const dispatch = useMainDispatch();

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <Button
        type="button"
        onClick={(): types.IPopupAction =>
          dispatch(
            hooks.enablePopup({
              message: 'Testing popups',
            }),
          )
        }
      >
        Toggle popup
      </Button>
    </Container>
  );
};

export default Debug;
