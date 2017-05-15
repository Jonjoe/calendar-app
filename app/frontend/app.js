import React, {Component} from 'react'
import Calendar from './containers/calendar'
import Agenda from './containers/agenda'

import './global.css'
class App extends Component {
	render() {
		return(
			<main>
				<Calendar />
				<Agenda />
			</main>
		)
	}
}

export default App 
