import { HashRouter } from 'react-router-dom';
import Router from './Router';
import ViewsController from './ViewsController';
import Communicator from './communication';

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Communicator />
      <div className="app appInactive appLight">
        <ViewsController />
        <Router />
      </div>
    </HashRouter>
  );
}
