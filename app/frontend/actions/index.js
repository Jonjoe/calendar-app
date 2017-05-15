export function selectDay(day) {
	console.log(day)
}

export function setMonthsDays(days) {
	return {
		type: 'DAYS_SET',
		payload: days
	}
}
