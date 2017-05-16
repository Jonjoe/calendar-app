import {
	FETCH_AGENDA,
	FETCH_AGENDA_FULFILLED,
	FETCH_AGENDA_REJECTED,
	SET_AGENDA_DATE
} from '../../actions'

import DateTime from '../../utilities/dateTime.class'
const Datetime = new DateTime

const INITIAL_STATE = {
	days: [],
	date: null,
	fetching: false,
	fetched: false,
	error: null
}

const agendaReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case FETCH_AGENDA:
			return {...state, fetching: true}
		case FETCH_AGENDA_REJECTED:
			return {...state, fetching: false, error: action.payload}
		case FETCH_AGENDA_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				days: action.payload.data
			}
		case SET_AGENDA_DATE:
			return {
				...state,
				date: action.payload
			}
	}
	
	return state
}


export default agendaReducer
