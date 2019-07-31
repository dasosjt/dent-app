import { Component, useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Header,
  Card,
  Grid,
  Image, 
  Button,
  Segment,
  List
} from 'semantic-ui-react'
import CreateInjuryModal from '../components/createinjurymodal'
import HeaderLayout from '../components/headerlayout'
import { withAuthSync } from '../utils/auth'
import CSS from '../components/css'

const Main = props => {
	const [injuries, setInjuries] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
    	getInjuries()
  	}, [injuries])

  	const getInjuries = () => fetch('http://127.0.0.1:5000/injury')
		.then(response => response.json())
		.then(data => {
			setInjuries(data)
		})

   	const deleteInjury = id => fetch(
  			`http://127.0.0.1:5000/injury/${id}`,
  			{ method: 'DELETE' }
  		)
  		.then(response => getInjuries())
  		.catch(error => setError(error.response))

  	const transRegister = register => (
  		{
  			'pi': 'PI',
  			'pt': 'PT',
  			'pce': 'PCE'
  		}[register]
  	)

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
									    <Card.Content>
									      <Card.Header>Lucentes</Card.Header>
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
									    <Card.Content>
									      <Card.Header>Opacas</Card.Header>
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
									    <Card.Content>
									      <Card.Header>Mixtas</Card.Header>
									    </Card.Content>
									    <Card.Content extra>
									    	<Link href={'/chart?title=mixtas'}>
									    		<a>Mas Información</a>
									    	</Link>
									    </Card.Content>
									  </Card>
									</Grid.Column>
									<Grid.Column columns='equal'>
	        						  <Card color='purple'>
									    <Card.Content>
									      <Card.Header>Todos</Card.Header>
									    </Card.Content>
									    <Card.Content extra>
									    	<Link href={'/chart?title=todas'}>
									    		<a>Mas Información</a>
									    	</Link>
									    </Card.Content>
									  </Card>
									</Grid.Column>
								</Grid.Row>
								{ 
									injuries && injuries.length > 0 ? 
							  			<Grid.Row columns={3}>
							  				<Grid.Column width={2}/>
							  				<Grid.Column>
							  				<Segment inverted>
												<List 
													divided
													verticalAlign='middle'>
													{
														injuries.map(injury => (
															<List.Item key={injury.injury_id}>
																<List.Content floated='right'>
															    	<Button onClick={() => deleteInjury(injury.injury_id)}>
															    		{'Eliminar'}
															    	</Button>
															    </List.Content>
															    <List.Content>
															    	{
															    		' ID: ' + injury.register_num +
															    		' Registro:' + transRegister(injury.register) +
															    		' Paciente: ' + injury.name + ' ' + injury.lastname
															    	}
															    </List.Content>
															</List.Item>
														))
													}
												</List>
											</Segment>
											</Grid.Column>
											<Grid.Column width={2}/>
										</Grid.Row> :
										null 
								}
								<Grid.Row>
									<Grid.Column width={12}/>
									<CreateInjuryModal callback={getInjuries}/>
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

export default withAuthSync(Main)