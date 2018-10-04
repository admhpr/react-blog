import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import {BrowserRouter, Route} from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/PostsIndex';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex}></Route>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
