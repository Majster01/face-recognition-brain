import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import { rootReducer } from './reducers';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
