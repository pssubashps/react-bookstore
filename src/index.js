import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import axios from 'axios';
import ReduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom'

axios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('intercepting....');
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

const store = createStore(
  reducer,
  applyMiddleware(ReduxPromise,thunk)
);
ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
