import {
	FETCH_AGENDA
} from '../../actions'

const INITIAL_STATE = []

const agendaReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_AGENDA:
			return [action.payload.data]
	}

	return state
}


export default agendaReducer
