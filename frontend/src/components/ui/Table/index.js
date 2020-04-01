import React from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import Text from '../Text';

const Table = ({ data, title }) => {
  return (
    <>
      {title && <Text sectionTitle>{title}</Text>}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(value =>
            <tr>
              <td>{moment(value.date).format('MM/DD/YY hh:mma')}</td>
              <td>{value.value}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
