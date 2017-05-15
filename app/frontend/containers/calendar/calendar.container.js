import React, {Component} from 'react'
import {connect} from 'react-redux'

import CalendarItem from '../../components/calendarItem'
import './styles.css'

class Calendar extends Component {
	constructor(props){
		super(props)
	}

	_getItemClass(day) {
		let typeClass = ''
		
		
		switch(day) {
			
		}
		

		return typeClass
	}

	_renderDays(){
		const now = new Date
		const daysCount = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()

		let daysRender = []

		for(var i = 1; i <= daysCount; i++) {
			daysRender.push((
				<CalendarItem 
					typeClass={this._getItemClass(i)} 
					day={i} 
					key={i}
				/>
			))
		}
		
		return daysRender
	}
	
	render(){
		console.log(this.props.events)

		return (
			<ul className="Calendar">
				{this._renderDays()}	
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		events: state.calendar.events
	} 
}

export default connect(mapStateToProps)(Calendar)
