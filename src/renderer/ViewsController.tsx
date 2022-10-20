import React from 'react';
import Components from './components';

const Controllers: React.FC = () => {
  return (
    <>
      <Components.Popup />
      <Components.Settings />
      <Components.Navbar />
    </>
  );
};

export default Controllers;
