import React, {Component} from 'react'

import Calendar from '../../containers/Calendar'
import Agenda from '../../containers/Agenda'

import '../../stylesheets/typography.css'
import '../../stylesheets/global.css'

class App extends Component {
	render() {
		return(
			<main>
				<Agenda />
				<Calendar />
			</main>
		)
	}
}

export default App 
