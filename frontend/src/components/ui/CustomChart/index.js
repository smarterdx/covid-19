import React from 'react';
import './style.scss';
import moment from 'moment';
import Text from '../Text';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer
} from 'recharts';

const CustomChart = ({ data, name, className }) => {
  if(!data || data.length <= 1) return null

  data = data.map((d) => {
    return {
      ...d,
      value: parseFloat(d.value)
    }
  })
  return (
    <div className={`line-chart ${className}`}>
      <Text sectionTitle>{name}</Text>
      <ResponsiveContainer height={225}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(d) => moment(d).format('M/D/YY ha')}
          />
          <YAxis width={10} domain={[dataMin => (Math.floor(dataMin)), dataMax => (Math.ceil(dataMax))]} />
          <Tooltip labelFormatter={(d) => moment(d).format('M/D/YY hh:mma')} />
          {/*<Legend />*/}
          <Line type="monotone" dataKey="value" name={name} stroke="#8884d8" activeDot={{ r: 8 }} />
          {/*<ReferenceLine y={7.1} className="threshold-line" label=""  />*/}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomChart;
