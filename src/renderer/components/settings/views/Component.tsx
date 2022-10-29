import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import * as store from '../../../redux/hooks';
import * as hooks from '../../../redux';
import * as types from '../../../redux/types';
import * as animation from '../../../animation';
import { fillTheme, toggleTheme } from '../utils';

const Settings: React.FC = () => {
  const { enabled } = store.useMainSelector(hooks.settingsState);
  const dispatch = store.useMainDispatch();

  useEffect(() => {
    fillTheme();
  });

  return (
    <AnimatePresence>
      {enabled ? (
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
            onClick={(): types.IPopupAction =>
              dispatch(hooks.disableSettings())
            }
          >
            <i className="icon-left-open-outline navIcon" />
          </button>
          <div id="settingsBody">
            <header>Settings</header>
            <div>
              <span>
                Theme
                <input
                  id="themeToggle"
                  type="checkbox"
                  onChange={(): void => toggleTheme()}
                />
              </span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Settings;
