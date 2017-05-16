import React, {Component} from 'react'

import {
	connect,
} from 'react-redux'

import {
	bindActionCreators
} from 'redux'
	
import CalendarItem from '../../components/CalendarItem'

import {
	fetchEvents,
} from '../../actions'

import './styles.css'

class Calendar extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.props.fetchEvents()
	}

	_renderDays() {
		let days = []
		for(var i = 1; i <= 31; i++) {
			days.push((
				<CalendarItem key={i} day={i} />
			))
		}

		return days
	}

	render(){
		return (
			<ul className="Calendar">
				{this._renderDays()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		settings: state.settings,
		calendar: state.calendar
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchEvents
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
