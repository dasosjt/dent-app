import { Component } from 'react'
import Router from 'next/router'
import CSS from '../utils/css'


class Index extends Component {
	constructor(props){
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event){
		event.preventDefault()
		Router.push('/login')
	}

	render(){
		return (
			<div>
				<CSS/>
				Welcome to Dental App button
				<button onClick = { this.handleClick }>
					Login
				</button>
			</div>
		)
	}
}

export default Index