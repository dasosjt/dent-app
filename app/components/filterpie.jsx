import React from 'react'
import { useState } from 'react';
import {
  PieChart,
  Pie, 
  Legend, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts'
import {
  COLORS
} from '../configuration/options'

const FilterPie = props => {
  return <div style={{ width: '100%', height: 500 , padding: "0 0 0 15%"}}>
    <ResponsiveContainer>
      <PieChart>
        <Pie 
          dataKey="value" 
          isAnimationActive={true} 
          data={props.data} 
          label>
          {
            props.data.map((entry, index) => (
              <Cell 
                key={index}
                fill={COLORS[index % COLORS.length]}/>
            ))
          }
        </Pie>
        <Legend
          verticalAlign="bottom"
          layout="vertical"
          align="right"
          wrapperStyle={{
              paddingLeft: "15px"
          }}/>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <li onClick={() => console.log("Ver mas")} >Ver mas</li>
  </div>
}

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className={"recharts-default-legend"}
      style={{ "listStyle": "none" }}>
      {
        payload.slice(0, 24).map((entry, index) => (
          <li key={`item-${index}`}>
            <svg class="recharts-surface" width="14" height="14" 
              style={{
                display: "inline-block",
                verticalAlign: "middle", 
                marginRight: "4px",
              }}
              viewBox="0 0 32 32" version="1.1">
              <path stroke="none" fill={entry.color} d="M0,4h32v24h-32z" class="recharts-legend-icon">
              </path>
            </svg>
            <span>{entry.value} </span>
          </li>
        ))
      }
    </ul>
  );
}

export default FilterPie