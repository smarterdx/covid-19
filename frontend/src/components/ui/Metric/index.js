import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Icon } from '../Icon';
import './style.scss';

const PageContent = ({ className, value, label, change, secondary }) => {

  return (
    <div className={`metric ${className && className} ${secondary && 'secondary'}`}>
      <Grid className="metric-value-wrapper" container>
        <div className="metric-value">{value}</div>
        { change &&
          <div className={`change ${(change <= 0) && 'negative'}`}>
            { (change <= 0) ?
              <Icon icon="arrow-down" />
              :
              <Icon icon="arrow-up" />
            }
            {change}%
          </div>
        }
      </Grid>
      <div className="metric-label">{label}</div>
    </div>
  );
}

export default PageContent;
