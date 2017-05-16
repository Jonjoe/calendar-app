import axios from 'axios'

import DateTime from '../utilities/dateTime.class'
const Datetime = new DateTime

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const FETCH_EVENTS_REJECTED = 'FETCH_EVENTS_REJECTED'
export const FETCH_EVENTS_FULFILLED = 'FETCH_EVENTS_FULFILLED'

export const FETCH_AGENDA = 'FETCH_AGENDA'
export const FETCH_AGENDA_REJECTED = 'FETCH_AGENDA_REJECTED'
export const FETCH_AGENDA_FULFILLED = 'FETCH_AGENDA_FULFILLED'
export const SET_AGENDA_DATE = 'SET_AGENDA_DATE'

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
	const theMonth = Datetime.theMonth()
	const theYear = Datetime.theYear()

	const request = axios.get(`${conn.url}/events/day/${theDay}/${theMonth}/${theYear}`)
	
	return {
		type: FETCH_AGENDA,
		payload: request
	}
}

export function setAgendaDate(day) {
	const date = Datetime.constructDate(day)

	return {
		type: SET_AGENDA_DATE,
		payload: date
	}
}
