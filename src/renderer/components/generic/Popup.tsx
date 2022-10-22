import { PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as store from '../../redux/hooks';
import * as hooks from '../../redux';
import * as types from '../../redux/types';
import * as animation from '../../animation';

const Popup: React.FC = () => {
  const { message, enabled } = store.useMainSelector(hooks.IPopupState);
  const dispatch = store.useMainDispatch();

  return (
    <AnimatePresence>
      {enabled ? (
        <motion.div
          id="popup"
          variants={animation.slideBottom}
          initial="init"
          animate="visible"
          exit="exit"
        >
          <div id="popupBody">
            <h2>{message}</h2>
            <button
              type="button"
              className="mainButton"
              onClick={(): PayloadAction<types.IPopupAction> =>
                dispatch(hooks.disablePopup())
              }
            >
              Ok
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Popup;
