import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Use a react-redux component called <Provider> to make the store 
// available to all container components in app without passing it explicitly. 
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <App/>
  </Provider>
  , document.querySelector('.container'));
