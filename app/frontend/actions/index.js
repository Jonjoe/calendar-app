import axios from 'axios'

import DateTime from '../utilities/dateTime.class'

export const FETCH_EVENTS = 'FETCH_WEATHER'
export const GET_AGENDA = 'GET_AGENDA'

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

export function getAgenda(day) {
	const request = axios.get(`${conn.url}/events/day/${day}`)
	return {
		type: GET_AGENDA,
		payload: day
	}
}
