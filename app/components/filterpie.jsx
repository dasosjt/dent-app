import React from 'react'
import {
  PieChart,
  Pie, 
  Legend, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts'

export default props => (
  <div style={{ width: '100%', height: 700 }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie 
          dataKey="value" 
          isAnimationActive={false} 
          data={props.data} 
          fill="#8884d8" 
          label/>
        <Legend verticalAlign='bottom'/>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
)