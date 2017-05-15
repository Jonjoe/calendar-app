import {
	combineReducers
} from 'redux'

import appReducer from './appReducer'  
import calendarReducer from './calendarReducer'  

const reducer = combineReducers({
	settings: appReducer,
	calendar: calendarReducer
})  

export default reducer
