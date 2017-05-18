import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import './index.css';
import './animation.css';
import promise from 'redux-promise';
import Header from './components/Header';
import TodoIndexContainer from './containers/TodoIndexContainer';
import AlertContainer from './containers/AlertContainer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
            <Header />
            <TodoIndexContainer />
            <AlertContainer />
        </div>
    </Provider>,
  document.getElementById('root')
);
