import { HashRouter } from 'react-router-dom';
import React from 'react';
import Router from './Router';
import ViewsController from './ViewsController';
import Communicator from './communication';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Communicator />
      <div id="app" className="appInactive appLight">
        <ViewsController />
        <Router />
      </div>
    </HashRouter>
  );
};

export default App;
