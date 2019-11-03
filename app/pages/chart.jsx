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
    const translateMenu = m => ({
        key: m.filter,
        text: m.title,
        value: m,
    })

    const { title } =  props.router.query
    const headerTitle = title.charAt(0).toUpperCase() + title.slice(1)
    let headerTitleChart = ''
    if (headerTitle !== 'Todas') {
        headerTitleChart = headerTitle
    }
    const menu = MENUITEMS(headerTitleChart).map(translateMenu)
    
    const [filter, setFilter] = useState(menu[0].value.filter)
    const [filterTitle, setFilterTitle] = useState(menu[0].value.title)
    const [chartTitle, setChartTitle] = useState(menu[0].value.chartTitle)
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



    const handleItemClick = async (filter, sub, chartTitle, filterTitle) => {
        setFilter(filter)
        setChartTitle(chartTitle)
        setFilterTitle(filterTitle)

        if(sub){
            setSubMenuItems(sub.map(translateMenu))
        } else {
            setSubMenuItems([])
        }
    }

    return (
        <div>   
            <CSS/>
            <HeaderLayout 
                headerTitle={headerTitle}/>
            <Grid>
                <Grid.Column width={2}/>
                <Grid.Column width={12}>
                    <Grid>
                        <Grid.Column streched width={16}>
                            <Segment inverted color='purple' inline>
                                <Dropdown
                                    text={filterTitle}
                                    icon='filter'
                                    floating
                                    labeled
                                    button
                                    options={menu}
                                    className='icon'
                                    onChange={(e, { value }) => 
                                        handleItemClick(
                                            value.filter, 
                                            value.sub,
                                            value.chartTitle,
                                            value.title
                                        )
                                    }/>
                                {
                                    subMenuItems && subMenuItems.length > 0 ?
                                    <Dropdown
                                        icon='filter'
                                        floating
                                        labeled
                                        button
                                        options={subMenuItems}
                                        className='icon'
                                        onChange={(e, { value }) => 
                                            handleItemClick(
                                                value.filter, 
                                                value.sub,
                                                value.chartTitle,
                                                value.title
                                            )
                                        }/> : null
                                }
                                <Segment inverted style={{
                                        float: 'right'
                                    }}>
                                    <p>{chartTitle}</p>
                                </Segment>
                                <FilterPie data={data}/>
                                <Segment inverted>
                                    <p>Fuente: examen radiológico, fase III Dx, FOUSAC</p>
                                </Segment>
                            </Segment>
                        </Grid.Column> 
                    </Grid>
                </Grid.Column>
                <Grid.Column width={2}/>
            </Grid>
        </div>
    )
}))