import React, {Component} from 'react'
import {connect} from 'react-redux'

import AgendaItem from '../../components/AgendaItem' 
import './styles.css'

class Agenda extends Component {
	_checkEmpty(slot) {
		return true
	}
	
	_renderAgenda() {
		const agendaItems = this.props.agenda.days.map((day) => {
			return <AgendaItem name={day.name} />
		})

		return agendaItems
	}

	_renderNoAgenda() {
		return (
			<p> Nothing going on today ... </p>
		)
	}

	_renderLanding() {
		return (
			<div>
				<h1 className="dark">{this.props.settings.weekday}</h1>
				<h1 className="light">{this.props.settings.day} {this.props.settings.monthName}</h1>
			</div>
		)
	}

	render() {
		if(this.props.agenda.date) {
			if(this.props.agenda.days.length > 0){
				return (
					<ul className="Agenda">
						{this._renderAgenda()}
					</ul>
				)
			} else {
				return (
					<ul className="Agenda">
						{this._renderNoAgenda()}
					</ul>
				)
			}
		} else {
			return (
				<ul className="Agenda Agenda--landing">
					{this._renderLanding()}
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
