import React from 'react'
import { withRouter } from 'next/router'
import { Segment, Grid, Icon, Table } from 'semantic-ui-react'
import HeaderLayout from '../components/headerlayout'
import ExamplePie from '../components/examplepie'
import CSS from '../components/css'

export default withRouter((props) => {
	const { title } =  props.router.query

	return (
		<div>	
			<CSS/>
			<HeaderLayout 
				headerTitle={title.charAt(0).toUpperCase() + title.slice(1)}/>
			<Grid>
				<Grid.Column width={2}/>
        		<Grid.Column width={12}>
					<Segment inverted color='purple'>
					<Grid inline>
						<Grid.Column width={6}>
							<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell>Name</Table.HeaderCell>
							        <Table.HeaderCell>Status</Table.HeaderCell>
							        <Table.HeaderCell>Notes</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>

							    <Table.Body>
							      <Table.Row>
							        <Table.Cell>No Name Specified</Table.Cell>
							        <Table.Cell>Unknown</Table.Cell>
							        <Table.Cell negative>None</Table.Cell>
							      </Table.Row>
							      <Table.Row positive>
							        <Table.Cell>Jimmy</Table.Cell>
							        <Table.Cell>
							          <Icon name='checkmark' />
							          Approved
							        </Table.Cell>
							        <Table.Cell>None</Table.Cell>
							      </Table.Row>
							      <Table.Row>
							        <Table.Cell>Jamie</Table.Cell>
							        <Table.Cell>Unknown</Table.Cell>
							        <Table.Cell positive>
							          <Icon name='close' />
							          Requires call
							        </Table.Cell>
							      </Table.Row>
							      <Table.Row negative>
							        <Table.Cell>Jill</Table.Cell>
							        <Table.Cell>Unknown</Table.Cell>
							        <Table.Cell>None</Table.Cell>
							      </Table.Row>
							    </Table.Body>
							  </Table>
							</Grid.Column>
							<Grid.Column>
								<ExamplePie style={{ minWidth: 600 }}/>
							</Grid.Column>
						</Grid>
					</Segment>
				</Grid.Column>
				<Grid.Column width={2}/>
			</Grid>
		</div>
	)
})