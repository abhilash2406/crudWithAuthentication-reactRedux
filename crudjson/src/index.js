import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { GoogleLogin } from 'react-google-login';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
