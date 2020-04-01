import React, { useState } from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Icon } from '../ui/Icon';
import { Link } from 'react-router-dom';

const StatusBadge = ({ 
  status, 
  setStatus, 
  id, 
  next, 
  fresh, 
  pending, 
  complete, 
  withReminder, 
  queryDisabled,
  boolean,
  review
}) => {
  
  const [ acceptanceStatus, setAcceptanceStatus ] = useState('')

  return (
    <div className="query-cta">
      { status === 'pending' &&
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              full
              secondary
              onClick={() => setStatus('cdi_declined')}>Disagree</Button>
          </Grid>
          <Grid item xs={6}>
          <Link onClick={() => setStatus('sent_to_provider')} to={'/' + next + '/' + id}>
            <Button full>Query</Button>
          </Link>
          </Grid>
        </Grid>
      }
      { status === 'sent_to_provider' &&
        <>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button full secondary  onClick={() => setStatus('provider_declined')}>Declined</Button>
            </Grid>
            <Grid item xs={6}>
              <Button full onClick={() => setStatus('provider_documented')}>Documented</Button>
            </Grid>
          </Grid>
          <Link to={'/query/' + id}>
            <Button full>Send Reminder</Button>
          </Link>
        </>
      }
      { status === 'provider_documented' &&
        <Button secondary full>Add Note</Button>
      }
      {status === 'provider_declined' &&
        <Button secondary full>Add Note</Button>
      }
      { status === 'cdi_declined' &&
        <Button secondary full>Add Note</Button>
      }
      
      { boolean &&
        <div>
          { acceptanceStatus === 'accepted' &&
            <Badge className="query-accepted-rejected">
              <Grid container spacing={2} justify="space-between" alignItems="center">
                <Grid item><Icon className="accepted-icon" icon="check" size={12} /> Accepted</Grid> 
                <Grid item><a onClick={() => setAcceptanceStatus('')}>Undo</a></Grid>
              </Grid>
            </Badge>
          }
          { acceptanceStatus === 'rejected' &&
            <Badge light className="query-accepted-rejected">
              <Grid container spacing={2} justify="space-between" alignItems="center">
                <Grid item><Icon className="rejected-icon" icon="close" size={16} /> Rejected</Grid> 
                <Grid item><a onClick={() => setAcceptanceStatus('')}>Undo</a></Grid>
              </Grid>
            </Badge>
          }
          { acceptanceStatus === '' && 
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button 
                  full 
                  secondary
                  onClick={() => setAcceptanceStatus('rejected')}
                >Reject</Button>
              </Grid>
              <Grid item xs={6}>
                <Button 
                  full
                  onClick={() => setAcceptanceStatus('accepted')}
                >Accept</Button>
              </Grid>
            </Grid>
          }
        </div>
      }
      { review && 
        <Button full>Review</Button>
      }
    </div>
  );
}

export default StatusBadge;
