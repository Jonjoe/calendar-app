import React from 'react';
import {render} from 'react-dom';

import {
	Router,
	BrowserRouter
} from 'react-router-dom'

import {
	Provider
} from 'react-redux'

import {
	createStore
} from 'redux'

import App from './app'
import reducer from './reducers'

const store = createStore(reducer)  
				
render(
	<Provider store={store}>     
		<BrowserRouter>
			<App />
		</BrowserRouter>   
	</Provider>, 
	document.getElementById('root')
)
