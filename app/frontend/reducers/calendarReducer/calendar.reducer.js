import {
	FETCH_EVENTS
} from '../../actions'

import DateTime from '../../utilities/dateTime.class'
const now = new DateTime

const INITIAL_STATE = []

const calendarReducer = (state=INITIAL_STATE, action) => {   
	switch(action.type){
		case FETCH_EVENTS:
			return action.payload
	}
	
	return state;
}

export default calendarReducer
