import React from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';

const StatusBadge = ({ status, label, withReminder }) => {
  return (
    <div className="status-container">
      <Grid className="status" container alignItems="center">
        { label &&
          <Grid item className="status-label">
            Status:
          </Grid>
        }
        <Grid item>
          { status === 'pending' &&
            <div className="status-value new">
              New
            </div>
          }
          { status === 'sent_to_provider' &&
            <div className="status-value sent">
              Pending
            </div>
          }
          { status === 'provider_documented' &&
            <div className="status-value accepted">
              Accepted
            </div>
          }
          { status === 'provider_declined' &&
            <div className="status-value declined">
              Declined
            </div>
          }
          { status === 'cdi_declined' &&
            <div className="status-value declined">
              Declined
            </div>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default StatusBadge;
