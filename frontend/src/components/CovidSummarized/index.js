import React, { useState } from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import PersonDetails from '../PersonDetails';
import StatusBadge from '../StatusBadge';
import QueryCta from '../QueryCta';
import Detail from '../ui/Detail';
import Badge from '../ui/Badge';
import { Icon } from '../ui/Icon';
import StarRating from '../ui/StarRating';
import { Link } from 'react-router-dom';
import dxData from '../../diagnosis-data';
import { startCase, includes, uniqBy } from 'lodash';

const CovidSummarized = ({
    id,
    status: initialStatus,
    suggestion,
    patientFirstName,
    patientLastName,
    patientMrn,
    patientAccount,
    patientLocation,
    physicianFirstName,
    physicianLastName,
    diagnosis,
    observations,
    covidRating
  }) => {

  const obs = uniqBy(observations, 'name')
  const [ status, setStatusState ] = useState(initialStatus)

  // dont do this at home pls
  const setStatus = (newStatus) => {
    suggestion.cdi_review_status = newStatus
    setStatusState(newStatus)
  }

  let dxConfig = dxData[diagnosis] || {}

  return (
    <Grid container className="diagnosis-summarized" justify="space-between" alignItems="center">
      <Grid item sm={2} xs={4}>
        <Grid container direction="column">
          <Grid container className="patient-name">
            <Icon icon="patient" className="patient-icon" tertiary size={18}/>
            {patientFirstName} {patientLastName}
          </Grid>
          <PersonDetails
            provider
            firstName={physicianFirstName}
            lastName={physicianLastName}
          />

          <Detail
            label="MRN"
            value={patientMrn}
          />
          <Detail
            label="Account"
            value={patientAccount}
          />
          <Detail
            label="Location"
            value={patientLocation}
          />
        </Grid>
      </Grid>
      <Grid item sm={2} xs={8}>
        <StatusBadge status={status} withReminder />
        <div className="diagnosis-name"><Link to={'/workflow/' + id}>{diagnosis}</Link></div>
        
        <StarRating rating={covidRating} />

      </Grid>
      
      <Grid container sm={6} xs={12} spacing={1}>
        <Grid item xs={6}>
          {obs.slice(0,5).map((observation) =>
            <Badge light className="covid-observation">
              <Grid container spacing={2} justify="space-between">
                <Grid item>
                  {startCase(observation.name)}
                </Grid>
                <Grid item>
                  <Badge 
                    extraLight
                    warning={
                      (observation.name === 'chief_complaint') ||
                      (observation.name === 'procalcitonin' && observation.value < 0.5) ||
                      (observation.name === 'wbc_count' && (observation.value > 4 && observation.value < 12)) ||
                      (observation.name === 'd-dimer' && (observation.value > 150 || observation.value < 400)) ||
                      (observation.name === 'respiratory_viral_panel' && observation.value === 'negative') ||
                      (observation.name === 'lymphocyte_count' && (observation.value > 1 || observation.value <2)) ||
                      (observation.name === 'c_reactive_protein' && observation.value > 3) ||
                      (observation.name === 'esr' && observation.value < 30) ||
                      (observation.name === 'temperature' && observation.max > 37.9) ||
                      (observation.name === 'respiratory_rate' && observation.max > 18) ||
                      (observation.name === 'oxygen_device' && observation.value != "") ||
                      (observation.name === 'oxygen_saturation' && observation.min < 90) ||
                      (observation.name === 'high_flow_nasal_cannula')
                    }
                  >{
                    observation.name === 'respiratory_viral_panel' ?
                      observation.value === 'negative' ? <Icon icon="minus-outline" /> : <Icon icon="plus-outline" /> :
                      includes(['temperature', 'respiratory_rate','high_flow_nasal_cannula', 'nasal_cannula_flow_rate', 'heart_rate'], observation.name) ?
                      observation.max :
                      includes(['oxygen_saturation'], observation.name) ?
                      observation.min :
                      observation.value
                  }</Badge>
                </Grid>
              </Grid>
            </Badge>
          )}
        </Grid>
        <Grid item xs={6}>
          {obs.slice(5,10).map((observation) =>
            <Badge light className="covid-observation">
              <Grid container spacing={2} justify="space-between">
                <Grid item>
                  {startCase(observation.name)}
                </Grid>
                <Grid item>
                  <Badge 
                    extraLight
                    warning={
                      (observation.name === 'procalcitonin' && observation.value < 0.5) ||
                      (observation.name === 'wbc_count' && (observation.value > 4 && observation.value < 12)) ||
                      (observation.name === 'd-dimer' && (observation.value > 150 || observation.value < 400)) ||
                      (observation.name === 'respiratory_viral_panel' && observation.value === 'negative') ||
                      (observation.name === 'lymphocyte_count' && observation.value < 1.5) ||
                      (observation.name === 'c_reactive_protein' && observation.value > 3) ||
                      (observation.name === 'esr' && observation.value > 30) ||
                      (observation.name === 'temperature' && observation.max > 37.9) ||
                      (observation.name === 'respiratory_rate' && observation.max > 18) ||
                      (observation.name === 'oxygen_device' && observation.value != "") ||
                      (observation.name === 'oxygen_saturation' && observation.min < 90) ||
                      (observation.name === 'sputum_culture' && (observation.value === 'negative' || observation.value === 'Mixed Commensals')) ||
                      (observation.name === 'high_flow_nasal_cannula')                   }
                  >{observation.value}</Badge>
                </Grid>
              </Grid>
            </Badge>
          )}
        </Grid>
      </Grid>

      {/* <Grid item sm={1} xs={10}>
        <Grid container justify="flex-end">
          <QueryCta review />
        </Grid>
      </Grid> */}
    </Grid>
  );
}

export default CovidSummarized;