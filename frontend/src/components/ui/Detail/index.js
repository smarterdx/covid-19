import React from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';

const Detail = ({ children, className, label, value }) => {
  return (
    <Grid container className={`detail ${className && className}`}>
      <Grid item xs={5}>
        <span className="detail-label">{label}:</span>
      </Grid>
      <Grid item xs={7}>
        <span className="detail-value">{value}</span>
      </Grid>
    </Grid>
  );
}

export default Detail;
