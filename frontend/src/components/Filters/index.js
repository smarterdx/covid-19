import React, { useState } from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';

const Filters = ({ selectedFilter, setSelectedFilter }) => {

  return (
    <Grid container className="filters">
      Filter by number of stars:
      <a
        onClick={() => setSelectedFilter('all')}
        className={selectedFilter === 'all' ? 'selected' : ''}
      >
        All
      </a>
      <a
        onClick={() => setSelectedFilter('1')}
        className={selectedFilter === '1' ? 'selected' : ''}
      >
        1
      </a>
      <a
        onClick={() => setSelectedFilter('2')}
        className={selectedFilter === '2' ? 'selected' : ''}
      >
        2
      </a>
      <a
        onClick={() => setSelectedFilter('3')}
        className={selectedFilter === '3' ? 'selected' : ''}
      >
        3
      </a>
    </Grid>
  );
}

export default Filters;
