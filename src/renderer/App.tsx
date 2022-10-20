import { HashRouter } from 'react-router-dom';
import Router from './Router';
import ViewsController from './ViewsController';

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <div className="app appInactive">
        <ViewsController />
        <Router />
      </div>
    </HashRouter>
  );
}
