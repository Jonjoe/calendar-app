import React, {Component} from 'react'

import Calendar from '../../containers/Calendar'
import Agenda from '../../containers/Agenda'

import '../../stylesheets/global.css'

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
