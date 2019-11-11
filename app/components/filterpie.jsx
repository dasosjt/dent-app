import React from 'react'
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

export default props => (
  <div style={{ width: '100%', height: 500 , padding: "0 0 0 15%"}}>
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
  </div>
)