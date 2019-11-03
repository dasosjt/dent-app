import React from 'react'
import {
  PieChart,
  Pie, 
  Legend, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts'

export default props => (
  <div style={{ width: '100%', height: 500 }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie 
          dataKey="value" 
          isAnimationActive={true} 
          data={props.data} 
          fill="#8884d8"
          label/>
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