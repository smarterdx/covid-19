import React from 'react';
import './style.scss'
import Grid from '@material-ui/core/Grid';
import { LinePath } from '@vx/shape';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max, min } from 'd3-array';
import { groupBy, map, merge, values } from 'lodash';
import { Icon } from '../ui/Icon';
import dxData from '../../diagnosis-data'

const relevantValues = merge.apply(null, map(dxData, ({ RelevantValues }) => RelevantValues))


// accessors
const x = d => new Date(d.date);
const y = d => parseFloat(d.value);

export default ({ width, height, data, diagnosis }) => {
  // bounds
  const xMax = width;
  const yMax = height;

  // scales
  const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(data, x)
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [ min(data, y) * 2/3, max(data, y) * 1.5 ]
  });
  
  const relevantValue = dxData[diagnosis] && dxData[diagnosis].RelevantValues[data[0].name]

  if(dxData[diagnosis] && !dxData[diagnosis].RelevantValues[data[0].name]) {
    return null
  }

  let fn = relevantValue && relevantValue.Calculation === 'Minimum' ? min : max

  return (<Grid item xs={4}>
    <div className="summary-chart">
      <div className="summary-chart-title">
        <span className="summary-chart-title-label">{data[0].name}:</span>
        <span className="summary-chart-title-value">{fn(data, y)}</span>
      </div>
      <div className="sparkline">
        <svg width={width} height={height}>
          <LinePath
            data={data}
            className="sparkline-line"
            x={d => xScale(x(d))}
            y={d => yScale(y(d))}
            stroke={'black'}
            strokeWidth={1}
          />
        </svg>
      </div>
    </div>
  </Grid>



  );
};
