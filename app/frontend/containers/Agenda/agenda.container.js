import React, {Component} from 'react'
import {connect} from 'react-redux'

import AgendaItem from '../../components/AgendaItem' 
import './styles.css'

class Agenda extends Component {
	_renderAgenda() {
		const agendaItems = this.props.agenda.days.map((day) => {
			return <AgendaItem name={day.name} />
		})

		return agendaItems
	}

	_renderPlaceholder() {
		return <p>Pick a day</p>
	}

	render() {
		if(this.props.agenda.date) {
			if(this.props.agenda.days.length > 0) {
				return (
					<ul>
						<p>{this.props.agenda.date}</p>
						{this._renderAgenda()}
					</ul>
				)
			} else {
				return <p>Nothing booked for {this.props.agenda.date}</p>
			}
		} else {
			return (
				<ul>
					<p>{this.props.agenda.date}</p>
					{this._renderPlaceholder()}
				</ul>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		agenda: state.agenda,
		settings: state.settings
	}
}

export default connect(mapStateToProps)(Agenda)
