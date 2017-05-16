import React from 'react'

import './styles.css'

const AgendaItem = (props) => {
	let content = (
		<div className="Agenda__ItemBody">
			<p>{props.name}</p>
		</div>
	)

	if(props.empty){
		content = (
			<div className="Agenda__ItemBody">
				<p>Empty Slot </p>
			</div>	
		)	
	}
	return (
		<li
			className="Agenda__Item"
		>
			{content}
		</li>
	)
}

export default AgendaItem
