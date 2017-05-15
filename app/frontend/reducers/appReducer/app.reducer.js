const INITIAL_STATE = {}  

export default function appReducer(state=INITIAL_STATE, action) {   
	if (action.type === 'PLACEHOLDER') {
		return state;
	} else {
		return state;
	}
}
