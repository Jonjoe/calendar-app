import React, {Component} from 'react'
import {connect} from 'react-redux'

import AgendaItem from '../../components/AgendaItem' 
import './styles.css'

class Agenda extends Component {
	render() {
		return <h3>agenda</h3>
	}
}

function mapStateToProps(state) {
	return {
		agenda: state.agenda,
		settings: state.settings
	}
}

export default connect(mapStateToProps)(Agenda)
