import React, { UseState, UseEffect } from 'react'
import useLocalStorage from './Hooks/use-local-storage'
import useOnlineStatus from './Hooks/use-online-status'
import useDocumentTitle from './Hooks/use-document-title'


function UseLocalStorageExample(props) {
	const [name, setName] = useLocalStorage('name', 'Alice');
    
	return(
		<div>
			<input
			type="text"
			placeholder="Enter your name"
			value={name}
			onChange={e => setName(e.target.value)}
			/>
		</div>
	)
}

function UseOnlineStatusExample(props) { 
	const online = useOnlineStatus()
	console.log(`user is online: ${online}`)
	
	if(online) {
		return(
			<div style={{fontSize: '20px', color: 'green'}}>
				Internet available
			</div>
		)
	} else {

		return(
			<div style={{fontSize: '20px', color: 'red'}}>
				No internet
			</div>
		)
	}
}

function UseDocumentTitleExample(props) { 
	useDocumentTitle('Занятия | Hillel LMS')

	return (
		<div>
		</div>
	)
}


export  { UseLocalStorageExample, UseOnlineStatusExample, UseDocumentTitleExample }