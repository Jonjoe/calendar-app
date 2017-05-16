import React, {Component} from 'react'

import {
	connect,
} from 'react-redux'

import {
	bindActionCreators
} from 'redux'


import {
	fetchAgenda,
	setAgendaDate
} from '../../actions'

import './styles.css'

class CalendarItem extends Component {
	_callAgenda() {
		this.props.fetchAgenda(this.props.day)
		this.props.setAgendaDate(this.props.day)
	}

	render() {	
		return (
			<li
				onClick={() => this._callAgenda()}
				className="Calendar__Item">
				{this.props.day}
			</li>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchAgenda,
		setAgendaDate
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(CalendarItem)
