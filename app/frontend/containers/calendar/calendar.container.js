import React, {Component} from 'react'

import CalendarItem from '../../components/calendarItem'

import './styles.css'
class Calendar extends Component {
	_constructDays(){
		const now = new Date
		const daysCount = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()

		let daysRender = []

		for(var i = 1; i <= daysCount; i++) {
			daysRender.push((<CalendarItem day={i} key={i}/>))
		}
		
		return daysRender
	}
	
	render(){
		return (
			<ul className="Calendar">
				{this._constructDays()}	
			</ul>
		)
	}
}

export default Calendar
