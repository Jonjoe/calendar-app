const INITIAL_STATE = {
	toggle: false,
	date: null, 
	data: null
}  

const agendaReducer = (state=INITIAL_STATE, action) => {   
	if (action.type === 'PLACEHOLDER') {
		return state;
	} else {
		return state;
	}
}

export default agendaReducer
