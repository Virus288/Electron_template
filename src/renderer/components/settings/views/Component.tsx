import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import * as store from '../../../redux/hooks';
import * as hooks from '../../../redux';
import * as enums from '../../../enums';
import * as types from '../../../redux/types';
import * as animation from '../../../animation';

const Settings: React.FC = () => {
  const state = store.useMainSelector(hooks.popupState).targets[
    enums.EPopupTargets.SETTINGS
  ];
  const dispatch = store.useMainDispatch();

  return (
    <AnimatePresence>
      {state ? (
        <motion.div
          id="settings"
          variants={animation.slideRight}
          initial="init"
          animate="visible"
          exit="exit"
        >
          <button
            type="button"
            className="disablePanel"
            onClick={(): PayloadAction<types.IPopupAction> =>
              dispatch(
                hooks.disablePopup({ target: enums.EPopupTargets.SETTINGS })
              )
            }
          >
            <i className="icon-left-open-outline navIcon" />
          </button>
          <div id="settingsBody">
            <header>Settings</header>
            <div>Settings body</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Settings;
