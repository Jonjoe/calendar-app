import React, {Component} from 'react'

import AgendaItem from '../../components/agendaItem' 

import './styles.css'
class Agenda extends Component {
	_renderAgenda() {
		const slots = 24
		let renderedAgenda = []
		
		for(let i = 1; i <= slots; i++) {
			const name = 'item name'
			const description = 'item description'

			renderedAgenda.push((<AgendaItem key={i} name={name} desc={description} />))
		}

		return renderedAgenda
	}

	render() {
		return( 
			<ul className="Agenda">
				{this._renderAgenda()}
			</ul>
		)
	}
}

export default Agenda
