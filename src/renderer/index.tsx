import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import '../../node_modules/normalize.css/normalize.css';
import '../styles/index.css';
import mainStore from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={mainStore}>
    <App />
  </Provider>
);
