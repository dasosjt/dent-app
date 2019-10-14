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
		filter: 'location_sub'
	},
	{
		title: 'Tipo Localización',
		filter: 'location_div'
	},
	{
		title: 'Localización Blando',
		filter: 'location_div_0'
	},
	{
		title: 'Localización Duro',
		filter: 'location_div_1'
	},
	{
		title: 'Localización Aeréo',
		filter: 'location_div_2'
	},
	{
		title: 'Prueba',
		filter: 'location_lengua_position'
	},
	{
		title: 'Asociada',
		filter: 'op4'
	},
	{
		title: 'Asociada Pieza Dental',
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
		title: 'Expansión de Corticales',
		filter: 'op7'
	},
	{
		title: 'Pieza Incluida',
		filter: 'op8'
	},
	{
		title: 'Asociada Pieza Incluida',
		filter: 'op8_super'
	},
	{
		title: 'Desplazamiento Pieza Dental',
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
				<Grid.Column width={1}/>
        		<Grid.Column width={14}>
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
								<FilterPie data={data}/>
								<Segment inverted>
									<p>Fuente: examen radiológico, fase III Dx, FOUSAC</p>
								</Segment>
							</Segment>
						</Grid.Column> 

					</Grid>
				</Grid.Column>
				<Grid.Column width={1}/>
			</Grid>
		</div>
	)
}))