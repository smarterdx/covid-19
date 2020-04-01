import React from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import Metric from '../ui/Metric';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const STARS = gql`
query stars {
  star1: suggestion_aggregate(where: {covid_stars: {_eq: "1"}}) {
    aggregate {
      count(columns: covid_stars)
    }
  }
  star2: suggestion_aggregate(where: {covid_stars: {_eq: "2"}}) {
    aggregate {
      count(columns: covid_stars)
    }
  }
  star3: suggestion_aggregate(where: {covid_stars: {_eq: "3"}}) {
    aggregate {
      count(columns: covid_stars)
    }
  }
}
`

const Dashboard = () => {
  const { loading, error, data } = useQuery(STARS);
  if(loading) {
    return null
  }
  return (

    <div className="dashboard">
      <Grid container spacing={4} alignItems="center" spacing={10}>
        <Grid item xs={12} sm={3}>
          <h1>Hi, User</h1>
          <p>Welcome back to your workspace! Please stay healthy.</p>
        </Grid>

        <Grid item xs={12} sm={6}>
          <h3>Current statistics</h3>
          <Grid container className="summary-stats" spacing={10}>
            <Grid item xs={4}>
              <Metric value={data.star1.aggregate.count} label="1 Star" />

            </Grid>
            <Grid item xs={4}>
             <Metric value={data.star2.aggregate.count} label="2 Star" />


            </Grid>
            <Grid item xs={4}>
              <Metric value={data.star3.aggregate.count} label="3 Star" />


            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item xs={12} sm={3}>
          <div className="fun-fact">
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={4}>
                <img src={tipImage} />
              </Grid>
              <Grid item xs={8}>
                <h3>Tip!</h3>
                <p> Drug induced pancytopenia often occurs due to Zosyn</p>
              </Grid> 
            </Grid>
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Dashboard;
