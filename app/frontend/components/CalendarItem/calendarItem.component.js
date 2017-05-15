import React from 'react'

import './styles.css'
const CalendarItem = (props) => {
	return(
		<li className="Calendar__Item {props.typeClass}">{props.day}</li>
	)
}

export default CalendarItem
