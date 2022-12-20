import React from 'react';
import { AnimatePresence } from 'framer-motion';
import * as store from '../../../redux/hooks';
import * as hooks from '../../../redux';
import * as types from '../../../redux/types';
import * as animation from '../../../animation';
import Popup from '../themed';
import { Button, FullPageContainer } from '../../../customs';

const ComponentBody: React.FC<{ message: string }> = ({ message }) => {
  const dispatch = store.useMainDispatch();

  return (
    <FullPageContainer variants={animation.opacity} initial="init" animate="visible" exit="exit">
      <Popup>
        <h2>{message}</h2>
        <Button
          type="button"
          className="mainButton"
          onClick={(): types.IGenericAction => dispatch(hooks.disablePopup())}
        >
          Ok
        </Button>
      </Popup>
    </FullPageContainer>
  );
};

/**
 * Full screen popup. Used currently to show important information
 */
const Component: React.FC = () => {
  const { message, enabled } = store.useMainSelector(hooks.IPopupState);

  return <AnimatePresence mode="wait"> {enabled ? <ComponentBody message={message} /> : null}</AnimatePresence>;
};

export default Component;
