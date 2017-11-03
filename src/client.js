"use strict"
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// REACT-ROUTER
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// IMPORT COMBINED REDUCERS
import reducers from './reducers';
// IMPORT ACTIONS
import {addToCart} from './actions';
// STEP 1 create the store

import routes from './routes'

const initialState = window.INITIAL_STATE;

const store = createStore(reducers, initialState, applyMiddleware(thunk, logger));


const Routes = (
  <Provider store={store}>
    {routes}
  </Provider>
)

render(
  Routes, document.getElementById('app')
);
