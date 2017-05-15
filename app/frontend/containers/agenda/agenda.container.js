import React, {Component} from 'react'
import {connect} from 'react-redux'

import AgendaItem from '../../components/agendaItem' 
import './styles.css'

class Agenda extends Component {
	render() {
		if(!this.props.day) {
			return <div> No day selected ... </div>
		} else {
			return ( 
				<ul className="Agenda">
					<li>Agenda</li>
				</ul>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		day: state.calendar.activeDay
	}
}

export default connect(mapStateToProps)(Agenda)
