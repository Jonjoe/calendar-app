import {
	FETCH_EVENTS,
	FETCH_EVENTS_REJECTED,
	FETCH_EVENTS_FULFILLED
} from '../../actions'

import DateTime from '../../utilities/dateTime.class'
const now = new DateTime

const INITIAL_STATE = {
	events: [],
	fetching: false,
	fetched: false,
	error: null,
}

function calendarReducer(state=INITIAL_STATE, action) {   
	switch(action.type){
		case FETCH_EVENTS:
			return {...state, fetching: true}
		case FETCH_EVENTS_REJECTED:
			return {...state, fetching: false, error: action.payload}
		case FETCH_EVENTS_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				events: action.payload.data
			}
	}
	
	return state;
}

export default calendarReducer
