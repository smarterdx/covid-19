import React from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom'
import { Icon } from '../ui/Icon';



class Diagnosis extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setLocation(event.target.value);
  }

  render() {
  return (
    <div container className="header">
      <Grid container justify="space-between" className="header-content" alignItems="center">
        <Grid item>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <NavLink to='/covid'>
              </NavLink>
            </Grid>
            <Grid className="nav-link selected" item>
              <NavLink to='/covid' activeClassName="selected">Dashboard</NavLink>
            </Grid>
            {/* <Grid className="nav-link" item>
              <NavLink to='/workflow/next' activeClassName="selected">Workflow</NavLink>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={3}>
            <Grid item>
              <div className="location-container">
                <span className="location-picker-label">Location:</span>
                <select value={this.props.currentLocation} onChange={this.handleChange}>
                  {/* <option value={null}> </option> */}
                  { this.props.locations.map(({ current_location }, i) =>
                    <option value={current_location}>{current_location}</option>
                  )}
                </select>
              </div>
            </Grid>
            <Grid item className="header-user">
              <Icon icon="user" size={20} className="header-user-icon" tertiary />
              <span className="header-user-name">
                Hospital User 
                {/* TODO: replace with username */}
                {/*<Icon icon="caret-down" className="header-user-menu-icon" size={14} />*/}
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  }
}

export default Diagnosis;
