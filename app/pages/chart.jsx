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
    Menu,
    Select
} from 'semantic-ui-react'
import HeaderLayout from '../components/headerlayout'
import FilterPie from '../components/filterpie'
import CSS from '../components/css'
import { withAuthSync } from '../utils/auth'
import { MENUITEMS } from '../configuration/options'

export default withAuthSync(withRouter((props) => {
    const { title } =  props.router.query
    const headerTitle = title.charAt(0).toUpperCase() + title.slice(1)
    const menu = MENUITEMS(headerTitle)
    const [filter, setFilter] = useState(menu[0].filter)
    const [data, setData] = useState([])
    const [subMenuItems, setSubMenuItems] = useState([])

    const getData = () => fetch(`http://127.0.0.1:5000/injury/${title}/${filter}`)
        .then(response => response.json())
        .then(data => {
            setData(data)
        })

    useEffect(() => {
        getData()
    }, [filter])

    const handleItemClick = async (filter, sub) => {
        setFilter(filter)

        if(sub){
            setSubMenuItems(sub)
        }
    }

    return (
        <div>   
            <CSS/>
            <HeaderLayout 
                headerTitle={headerTitle}/>
            <Grid>
                <Grid.Column width={16}>
                    <Grid>
                        <Grid.Column width={3}>
                            <Segment inverted color='purple'>
                                <Menu pointing secondary vertical inverted>
                                {
                                    menu && menu.length > 0 ?
                                    menu.map( (item, key) => (
                                        <Menu.Item 
                                            key={key}
                                            active={filter === item.filter} 
                                            onClick={() => handleItemClick(item.filter, item.sub)}>
                                            {item.title}
                                        </Menu.Item>
                                        )
                                    ) : null
                                }
                                </Menu>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Segment inverted color='purple'>
                                <Menu pointing secondary vertical inverted>
                                    {
                                        subMenuItems && subMenuItems.length > 0 ?
                                        subMenuItems.map( (item, key) => (
                                            <Menu.Item 
                                                key={key}
                                                name={item.filter}
                                                active={filter === item.filter} 
                                                onClick={() => handleItemClick(item.filter, item.sub)}>
                                                {item.title}
                                            </Menu.Item>
                                            )
                                        ) : null
                                    }
                                </Menu>
                            </Segment>
                        </Grid.Column> 

                        <Grid.Column stretched width={10}> 
                            <Segment inverted color='purple'>
                                <FilterPie data={data}/>
                                <Segment inverted>
                                    <p>Fuente: examen radiológico, fase III Dx, FOUSAC</p>
                                </Segment>
                            </Segment>
                        </Grid.Column> 

                    </Grid>
                </Grid.Column>
            </Grid>
        </div>
    )
}))