import React, {Component} from 'react'

import {
	connect,
} from 'react-redux'

import {
	bindActionCreators
} from 'redux'
	
import CalendarItem from '../../components/calendarItem'

import {
	selectDay,
	setMonthsDays
} from '../../actions'

import './styles.css'

class Calendar extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		let days = []

		for(var i = 1; i <= this.props.current.daysInMonth; i++) {
			days.push({
				date: i,
			 	events: []	
			})
		}
	}

	_getItemClass(day) {
		let typeClass = ''
		switch(day) {}
		return typeClass
	}

	_renderDays(){
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
		current: state.calendar.current,
		days: state.calendar.days
	} 
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectDay: selectDay,
		setMonthsDays: setMonthsDays
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
