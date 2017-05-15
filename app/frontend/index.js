import React from 'react';
import {render} from 'react-dom';

import {
	Router,
	BrowserRouter
} from 'react-router-dom'

import {
	Provider
} from 'react-redux'

import ReduxPromise from 'redux-promise'

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
	applyMiddleware(ReduxPromise) 
));

render(
	<Provider store={store}>     
		<BrowserRouter>
			<App />
		</BrowserRouter>   
	</Provider>, 
	document.getElementById('root')
)
