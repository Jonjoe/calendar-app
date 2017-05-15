import {
	combineReducers
} from 'redux'

import appReducer from './appReducer'  
import agendaReducer from './agendaReducer'  
import calendarReducer from './calendarReducer'  

const reducer = combineReducers({
	settings: appReducer,
	agenda: agendaReducer,
	calendar: calendarReducer
})  

export default reducer
