import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    <Provider store={store}>
      <BrowserRouter basename="wood-accounting">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
