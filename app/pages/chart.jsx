import React, { useState, useEffect } from 'react'
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
	Header,
	Menu
} from 'semantic-ui-react'
import HeaderLayout from '../components/headerlayout'
import FilterPie from '../components/filterpie'
import CSS from '../components/css'
import { withAuthSync } from '../utils/auth'

const menuItems = [
	{ 
		title: 'Edad',
		filter: 'age'
	},
	{
		title: 'Género',
		filter: 'gender'
	},
	{ 
		title: 'Única-Multiple',
		filter: 'op1'
	},
	{ 
		title: 'Unilocular-Multilocular',
		filter: 'op2'
	},
	{
	    title: 'Formas',
	    filter: 'form'
	},
	{
		title: 'Bordes',
		filter: 'op3'
	},
	{
		title: 'Localización',
		filter: 'location'
	},
	{
		title: 'Asociada',
		filter: 'op4'
	},
	{
		title: 'Asociada Super Númeraria',
		filter: 'op4_super'
	},
	{
		title: 'Reabsorción',
		filter: 'op5'
	},
	{
		title: 'Reabsorción Tipo',
		filter: 'op5_type'
	},
	{
		title: 'Desplazamiento',
		filter: 'op6'
	},
	{
		title: 'Desplazamiento Super Númeraria',
		filter: 'op6_super'
	},
	{
		title: 'Tipo de Registro',
		filter: 'register'
	},
	{
		title: 'Diagnóstico Diferencial 1',
		filter: 'dif1'
	},
	{
		title: 'Diagnóstico Diferencial 2',
		filter: 'dif2'
	},
	{
		title: 'Diagnóstico Diferencial 3',
		filter: 'dif3'
	},
]

export default withAuthSync(withRouter((props) => {
	const { title } =  props.router.query
	const [filter, setFilter] = useState(menuItems[0].filter)
	const [data, setData] = useState([])

	const getData = () => fetch(`http://127.0.0.1:5000/injury/${title}/${filter}`)
		.then(response => response.json())
		.then(data => {
			setData(data)
		})

	useEffect(() => {
    	getData()
  	}, [filter])

	const handleItemClick = async (e, { name }) => {
		setFilter(name)
	}

	return (
		<div>	
			<CSS/>
			<HeaderLayout 
				headerTitle={title.charAt(0).toUpperCase() + title.slice(1)}/>
			<Grid>
				<Grid.Column width={2}/>
        		<Grid.Column width={12}>
        			<Grid>

						<Grid.Column width={4}>
							<Segment inverted color='purple'>
							<Menu pointing secondary vertical inverted>
							{
								menuItems && menuItems.length > 0 ?
								menuItems.map( (item, key) => (
									<Menu.Item 
										key={key}
										name={item.filter}
										active={filter === item.filter} 
										onClick={handleItemClick}>
										{item.title}
	        						</Menu.Item>
	        						)
	        					) : null
							}
							</Menu>
							</Segment>
						</Grid.Column>

						<Grid.Column stretched width={12}> 
							<Segment inverted color='purple'>
								<Header as='h2'>
									{title.charAt(0).toUpperCase() + title.slice(1)}
								</Header>
								<FilterPie data={data}/>
							</Segment>
						</Grid.Column> 

					</Grid>
				</Grid.Column>
				<Grid.Column width={2}/>
			</Grid>
		</div>
	)
}))