import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './styles/index.css';
import './styles/fontello/css/fontello.css';
import mainStore from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Root: React.FC = () => {
  return (
    <Provider store={mainStore}>
      <App />
    </Provider>
  );
};

root.render(<Root />);

if (process.env.NODE_ENV !== 'production') {
  window.store = mainStore;
}
