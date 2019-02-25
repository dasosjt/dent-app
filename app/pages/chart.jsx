import React from 'react'
import { withRouter } from 'next/router'
import { Segment, Grid, Icon, Table, Tab, Dropdown } from 'semantic-ui-react'
import HeaderLayout from '../components/headerlayout'
import FilterPie from '../components/filterpie'
import CSS from '../components/css'

const stateOptions01 = [ { key: 'AL', value: 'AL', text: 'Hombre' }, { key: 'AL', value: 'AL', text: 'Mujer' } ]

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane> <FilterPie/> </Tab.Pane>},
  { menuItem: 'Tab 2', render: () => <Tab.Pane> <FilterPie/> </Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane> <FilterPie/> </Tab.Pane> },
]

const TabContainer = () => <Tab panes={panes} />

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
						<Grid columns='equal'>
							<Grid.Column>
								<TabContainer/>
							</Grid.Column>
							<Grid.Column>
								<Segment>
									<Dropdown placeholder={stateOptions01[0].text} search selection options={stateOptions01} />
								</Segment>
							</Grid.Column>
						</Grid>
					</Segment>
				</Grid.Column>
				<Grid.Column width={2}/>
			</Grid>
		</div>
	)
})