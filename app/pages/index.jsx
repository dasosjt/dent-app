import { Component } from 'react'
import Router from 'next/router'
import {
	Button,
	Grid,
	Message, 
	Segment 
} from 'semantic-ui-react'
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
				<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						Welcome to Dental App button
						<Button onClick={this.handleClick} primary>
							Login
						</Button>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default Index