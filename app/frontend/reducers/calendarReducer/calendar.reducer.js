import DateTime from '../../utilities/dateTime.class'
const now = new DateTime

const INITIAL_STATE = {
	current: {
		day: now.theDay(),
		month: now.theMonth(), 
		daysInMonth: now.countThisMonthsDays()
	},
	activeDay: null,
	days: []
}

const calendarReducer = (state=INITIAL_STATE, action) => {   
	switch(action.type){
	case 'DAYS_SET':
		return action.payload
	}
	
	return state;
}

export default calendarReducer
