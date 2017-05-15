import DateTime from '../../utilities/dateTime.class'
const now = new DateTime

const INITIAL_STATE = {
	day: now.theDay(),
	month: now.theMonth() 
}  

const calendarReducer = (state=INITIAL_STATE, action) => {   
	if (action.type === 'PLACEHOLDER') {
		return state;
	} else {
		return state;
	}
}

export default calendarReducer
