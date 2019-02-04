import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import reducers from './redux/reducers'
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, {}, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
