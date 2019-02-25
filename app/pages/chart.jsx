import React from 'react'
import { withRouter } from 'next/router'
import { 
	Segment, 
	Grid, 
	Icon, 
	Table, 
	Tab, 
	Dropdown, 
	Input, 
	Divider, 
	Header
} from 'semantic-ui-react'
import HeaderLayout from '../components/headerlayout'
import FilterPie from '../components/filterpie'
import CSS from '../components/css'

const stateOptions01 = [ { key: 'TD', value: 'TD', text: 'Todos' }, { key: 'AL', value: 'AL', text: 'Hombre' }, { key: 'AL', value: 'AL', text: 'Mujer' } ]
const stateOptions02 = [ { key: 'TD', value: 'TD', text: 'Todos' }, { key: 'AL', value: 'AL', text: 'Asociada' }, { key: 'AL', value: 'AL', text: 'No asociada' } ]
const stateOptions03 = [ { key: 'TD', value: 'TD', text: 'Todos' }, { key: 'AL', value: 'AL', text: 'Reabsorcion' }, { key: 'AL', value: 'AL', text: 'No reabsorcion' } ]
const stateOptions04 = [ { key: 'TD', value: 'TD', text: 'Todos' }, { key: 'AL', value: 'AL', text: 'Desplazamiento' }, { key: 'AL', value: 'AL', text: 'No desplazamiento' } ]

/*asociada, reabsorcion y desplazamiento*/

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane> <FilterPie/> </Tab.Pane>},
  { menuItem: 'Tab 2', render: () => <Tab.Pane> <FilterPie/> </Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane> <FilterPie/> </Tab.Pane> },
]

const TabContainer = () => (
	<Tab 
		menu={{ 
			color: 'white',
			inverted: true, 
			secondary: true, 
			pointing: true 
		}} 
		panes={panes}/>
)

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
						<Grid columns={2}>
							<Grid.Column width={11}>
								<TabContainer/>
							</Grid.Column>
							<Grid.Column width={5}>
								<Segment style={{ margin: 5 }}>
									<Header as='h4'> Filtrar por </Header>
									<Header as='h5' color='grey'> Género </Header>
									<Dropdown 
										placeholder={stateOptions01.length > 0 ? stateOptions01[0].text : 'null'}
										search
										selection 
										options={stateOptions01}/>
									<Header as='h5' color='grey'> Edad </Header>
									<Input placeholder='min' type='number' min={0} max={100}/>
									<Input placeholder='max' type='number' min={0} max={100}/>
									<Header as='h5' color='grey'> X </Header>
									<Dropdown 
										placeholder={stateOptions02.length > 0 ? stateOptions02[0].text : 'null'}
										search
										selection 
										options={stateOptions02}/>
									<Header as='h5' color='grey'> Y </Header>
									<Dropdown 
										placeholder={stateOptions03.length > 0 ? stateOptions03[0].text : 'null'}
										search
										selection 
										options={stateOptions03}/>
									<Header as='h5' color='grey'> Z </Header>
									<Dropdown 
										placeholder={stateOptions04.length > 0 ? stateOptions04[0].text : 'null'}
										search
										selection 
										options={stateOptions04}/>	
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