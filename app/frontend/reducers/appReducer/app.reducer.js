const INITIAL_STATE = {}  

const appReducer = (state=INITIAL_STATE, action) => {   
	if (action.type === 'PLACEHOLDER') {
		return state;
	} else {
		return state;
	}
}

export default appReducer
