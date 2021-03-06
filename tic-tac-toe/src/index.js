import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './redux/store';
import App from './views/App.jsx';

const { store, persistor } = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={"loading..."} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);