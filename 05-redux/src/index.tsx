import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { counterReducer, initialState } from 'reducer';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const store = createStore(counterReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement,
);

reportWebVitals();
