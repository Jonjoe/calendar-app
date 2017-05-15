import React from 'react';
import {render} from 'react-dom';

import {
	Router,
	hashHistory
} from 'react-router'

import {
	provider
} from 'react-redux'

import {
	createStore
} from 'redux'

import routes from './routes'
import reducer from './reducers'

const store = createStore(reducer)  
				
render(
	<Provider store={store}>     
		<Router history={hashHistory} routes={routes}/>   
	</Provider>, 
	document.getElementById('root')
)
