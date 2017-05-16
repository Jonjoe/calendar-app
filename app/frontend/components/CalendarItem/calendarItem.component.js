import React, {Component} from 'react'

import {
	connect,
} from 'react-redux'

import {
	bindActionCreators
} from 'redux'


import {
	fetchAgenda
} from '../../actions'

import './styles.css'

class CalendarItem extends Component {
	render() {
		return (
			<li
				onClick={() => this.props.fetchAgenda(this.props.day)}
				className="Calendar__Item">
				{this.props.day}
			</li>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchAgenda
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(CalendarItem)
