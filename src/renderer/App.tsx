import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Router from './Router';
import ViewsController from './ViewsController';
import Communicator from './communication';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Communicator />
      <div id="app" className="appInactive appLight">
        <ViewsController />
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;
