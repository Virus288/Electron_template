import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMainDispatch } from '../../../redux/hooks';
import * as hooks from '../../../redux';
import * as types from '../../../redux/types';
import * as animation from '../../../animation';

const Home: React.FC = () => {
  const dispatch = useMainDispatch();

  return (
    <AnimatePresence mode="wait">
      <motion.div id="home" variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
        <button type="button" className="mainButton">
          Button
        </button>
        <button
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
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
