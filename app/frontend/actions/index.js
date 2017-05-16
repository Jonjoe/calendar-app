import axios from 'axios'

import DateTime from '../utilities/dateTime.class'
const now = new DateTime

export const FETCH_EVENTS = 'FETCH_WEATHER'
export const FETCH_AGENDA = 'FETCH_AGENDA'

const conn = {
	url: 'http://localhost:3000/api/v1'
}

export function fetchEvents() {
	const request = axios.get(`${conn.url}/events`)
	
	return {
		type: FETCH_EVENTS,
		payload: request
	}
}

export function fetchAgenda(day) {
	const theDay = parseInt(day)
	const theMonth = now.theMonth()
	const theYear = now.theYear()

	const request = axios.get(`${conn.url}/events/day/${theDay}/${theMonth}/${theYear}`)
	
	return {
		type: FETCH_AGENDA,
		payload: request
	}
}
