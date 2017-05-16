import DateTime from '../../utilities/dateTime.class'
const now = new DateTime

const INITIAL_STATE = {
	weekday: now.theDayName(),
	day: now.theDay(),
	month: now.theMonth(), 
	monthName: now.theMonthName(),
	daysInMonth: now.countThisMonthsDays()
}

const settingsReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		
	}

	return state
}


export default settingsReducer
