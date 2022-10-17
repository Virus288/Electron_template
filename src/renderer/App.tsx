import { HashRouter } from 'react-router-dom';
import Router from './Router';
import ViewsController from './ViewsController';

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <ViewsController />
      <div className="app">
        <Router />
      </div>
    </HashRouter>
  );
}
