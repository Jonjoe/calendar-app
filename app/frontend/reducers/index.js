import {
	combineReducers
} from 'redux'

import appReducer from './appReducer'  

const reducer = combineReducers({
	appSettings: appReducer
})  

export default reducer
