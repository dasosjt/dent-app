import React from 'react'
import {
  Header,
  Card,
  Grid,
  Image, 
  Button,
  Segment
} from 'semantic-ui-react'

export default ({ headerTitle =  'LESIONES ROENTGENOLÓGICAS' }) => (
	<div style={{
		marginBottom: 25,
		paddingTop: 10
	}}>
		<Grid style={{ backgroundColor:'white' }}>
			<Grid.Row columns={3}>
				<Grid.Column width={2}>
					<Image 
						src='static/usac-logo.png' 
						style={{ margin: 'auto' }}
						width={65} 
						height={65}/>
				</Grid.Column>
				<Grid.Column width={12}>
					<Header 
						as='h2'
						color='purple' 
						textAlign='center'
						style={{
							'height': '100%',
							'width': '100%',
							'position': 'absolute',
							'top': '30%'
						}}>
						{ headerTitle }
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