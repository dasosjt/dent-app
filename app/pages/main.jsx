import { Component } from 'react'
import Link from 'next/link'
import {
  Header,
  Card,
  Grid,
  Image, 
  Button,
  Segment
} from 'semantic-ui-react'
import CreateInjuryModal from '../components/createinjurymodal'
import HeaderLayout from '../components/headerlayout'
import { withAuthSync } from '../utils/auth'
import CSS from '../components/css'

class Main extends Component {
  /*static async getInitialProps({ req, ctx }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }*/

  constructor(props){
  	super(props)
  	console.log(props)

  	this.handleOptionRoute = this.handleOptionRoute.bind(this)
  }

  handleOptionRoute(event){
  	event.preventDefault()
  	const { target } = event

  	console.log(target)
  }

  render(){
  	return (
  		<div>
        	<CSS/>
        	<HeaderLayout/>
        	<Grid>
        		<Grid.Row columns={3}>
        			<Grid.Column width={2}/>
        			<Grid.Column width={12}>
        				<Segment inverted color='purple'>
        					<Grid columns='equal' container >
        						<Grid.Row>
	        						<Grid.Column columns='equal'>
	        						  <Card color='purple'>
									    <Image src='/static/icon.png' />
									    <Card.Content>
									      <Card.Header>Lucentes</Card.Header>
									      <Card.Meta>Lorem ipsum</Card.Meta>
									      <Card.Description>Neque porro quisquam est qui</Card.Description>
									    </Card.Content>
									    <Card.Content extra>
									    	<Link href={'/chart?title=lucentes'}>
									    		<a>Mas Información</a>
									    	</Link>
									    </Card.Content>
									  </Card>
									</Grid.Column>
									<Grid.Column columns='equal'>
									  <Card>
									    <Image src='/static/icon.png' />
									    <Card.Content>
									      <Card.Header>Opacas</Card.Header>
									      <Card.Meta>Lorem ipsum</Card.Meta>
									      <Card.Description>Neque porro quisquam est qui</Card.Description>
									    </Card.Content>
									    <Card.Content extra>
									    	<Link href={'/chart?title=opacas'}>
									    		<a>Mas Información</a>
									    	</Link>
									    </Card.Content>
									  </Card>
									</Grid.Column>
									<Grid.Column columns='equal'>
									  <Card>
									    <Image src='/static/icon.png' />
									    <Card.Content>
									      <Card.Header>Mixtas</Card.Header>
									      <Card.Meta>Lorem ipsum</Card.Meta>
									      <Card.Description>Neque porro quisquam est qui</Card.Description>
									    </Card.Content>
									    <Card.Content extra>
									    	<Link href={'/chart?title=mixtas'}>
									    		<a>Mas Información</a>
									    	</Link>
									    </Card.Content>
									  </Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={12}/>
									<CreateInjuryModal/>
								</Grid.Row>
        					</Grid>
        				</Segment>
        			</Grid.Column>
        			<Grid.Column width={2}/>
        		</Grid.Row>	        		
	        </Grid>
        </div>
  	)
  }
}

export default withAuthSync(Main)