import React from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';

const ResultsBlock = ({ children, className, title, date }) => {
  return (
    <Grid
      container
      direction="column"
      className={`results-block ${className && className}`}
    >
      <Grid container justify="space-between">
        <Grid item xs={date ? 6 : 12}>
          <h3 className="title">{title}</h3>
        </Grid>
        { date &&
          <Grid item xs={6}>
            <div className="results-date">Last updated: {date}</div>
          </Grid>
        }
      </Grid>
      {children}
    </Grid>
  );
}

export default ResultsBlock;
