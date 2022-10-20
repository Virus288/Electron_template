import { PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { motion } from 'framer-motion';
import * as store from '../../redux/hooks';
import * as hooks from '../../redux';
import * as enums from '../../enums';
import * as types from '../../redux/types';
import * as animation from '../../animation';

const Popup: React.FC = () => {
  const { message } = store.useMainSelector(hooks.popupState);
  const state = store.useMainSelector(hooks.popupState).targets[
    enums.EPopupTargets.POPUP
  ];
  const dispatch = store.useMainDispatch();

  return state ? (
    <motion.div
      id="popup"
      variants={animation.opacity}
      initial="init"
      animate="visible"
      exit="exit"
    >
      <h2 className="popupBody">{message}</h2>
      <button
        type="button"
        onClick={(): PayloadAction<types.IPopupAction> =>
          dispatch(hooks.disablePopup({ target: enums.EPopupTargets.POPUP }))
        }
      >
        Ok
      </button>
    </motion.div>
  ) : null;
};

export default Popup;
