import { Component } from 'react'
import {
  Header,
  Card,
  Grid,
  Image, 
  Button,
  Segment
} from 'semantic-ui-react'

export default ({ headerTitle =  'LESIONES ROENTGENOLÓGICAS' }) => (
	<div>
		<div style={{  paddingTop: 15 }}/>
		<Grid>
			<Grid.Row columns={3}>
				<Grid.Column width={2}>
					<Image 
						src='static/usac-logo.png' 
						style={{ margin: 'auto' }}
						width={65} 
						height={65}/>
				</Grid.Column>
				<Grid.Column width={12}>
					<Header as='h2' color='teal' textAlign='center'>
		  				<Image src='static/icon.png' /> { headerTitle }
					</Header>
				</Grid.Column>
				<Grid.Column width={2}>
					<Image 
						src='static/fousac-logo.jpeg'
						style={{ margin: 'auto' }}
						width={65}
						height={65}/>
				</Grid.Column>        			
			</Grid.Row>
		</Grid>		
	</div>
)