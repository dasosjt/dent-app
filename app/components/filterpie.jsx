import { PureComponent } from 'react'
import {
  PieChart, Pie, Legend, Tooltip, Line, ResponsiveContainer
} from 'recharts'

const data01 = [
  { name: 'Única', value: 400 }, { name: 'Multiple', value: 300 }
]

const label01 = 'Ejemplo'

export default class FilterPie extends PureComponent { 
  render() {
    const { label = label01, data = data01 } = this.props


    return (
      <ResponsiveContainer width={300} height={250}>
        <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <Pie dataKey="value" isAnimationActive={false} data={data01} fill="#8884d8" label/>
          <Legend verticalAlign='bottom'/>
          <Tooltip />
          <Line name={label} position='top'/>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}