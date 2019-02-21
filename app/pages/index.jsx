import { Component } from 'react'
import Router from 'next/router'
import {
	Button,
	Image,
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
				<Grid
					textAlign='center' 
					verticalAlign='middle'
					style={{ paddingTop: 20 }}>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Segment>
							<Image src='static/main-logo.jpg'/>
							<br/>
							<Button onClick={this.handleClick} color='teal'>
								Iniciar Sesión
							</Button>
						</Segment>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default Index