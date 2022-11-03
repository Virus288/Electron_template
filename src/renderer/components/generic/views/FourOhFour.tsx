import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import * as animation from '../../../animation';

const FourOhFour: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="fourOhFour"
        variants={animation.slowSlideRight}
        initial="init"
        animate="visible"
        exit="exit"
      >
        <span>
          <header>Four oh four</header>
          <button type="button" className="mainButton">
            <Link to="/" replace>
              Take me home
            </Link>
          </button>
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default FourOhFour;
