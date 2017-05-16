import React from 'react';
import {render} from 'react-dom';

import {
	Router,
	BrowserRouter
} from 'react-router-dom'

import {
	Provider
} from 'react-redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import {
	composeWithDevTools
} from 'redux-devtools-extension'

import {
	createStore,
	applyMiddleware
} from 'redux'

import App from './components/App'

import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(
	applyMiddleware(promise(), thunk, logger) 
));

render(
	<Provider store={store}>     
		<BrowserRouter>
			<App />
		</BrowserRouter>   
	</Provider>, 
	document.getElementById('root')
)
