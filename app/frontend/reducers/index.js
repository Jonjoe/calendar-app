import {
	combineReducers
} from 'redux'

import settingsReducer from './settingsReducer'  
import calendarReducer from './calendarReducer'  
import agendaReducer from './agendaReducer'  

const reducer = combineReducers({
	agenda: agendaReducer,
	settings: settingsReducer,
	calendar: calendarReducer
})  

export default reducer
