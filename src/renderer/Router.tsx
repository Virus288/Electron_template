import { Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Components from './components';

const Router: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Components.Home />} />
        <Route path="*" element={<Components.FourOhFour />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
