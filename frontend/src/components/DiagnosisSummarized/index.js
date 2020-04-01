import React, { useState } from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import PersonDetails from '../PersonDetails';
import StatusBadge from '../StatusBadge';
import QueryCta from '../QueryCta';
import Detail from '../ui/Detail';
import { Icon } from '../ui/Icon';
import SparkLine from '../SparkLine';
import QualityIndicator from '../QualityIndicator';
import { map, groupBy } from 'lodash';
import { Link } from 'react-router-dom';
import dxData from '../../diagnosis-data'

const DiagnosisSummarized = ({
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
    physicianEmail,
    physicianPhone,
    diagnosis,
    reasoning,
    observations
  }) => {

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
      <Grid item sm={3} xs={8}>
        <StatusBadge status={status} withReminder />
        <div className="diagnosis-name"><Link to={'/workflow/' + id}>{diagnosis}</Link></div>

        { dxConfig.Revenue != null && <QualityIndicator type="Revenue" quality={dxConfig.Revenue} />}
        { suggestion.is_poa && <QualityIndicator type="POA" />}
        { suggestion.impacts_elixhauser && <QualityIndicator type="Elixhauser" />}
        { suggestion.impacts_hcc && <QualityIndicator type="HCC" />}
        { suggestion.impacts_psi && <QualityIndicator type="PSI" />}
        { suggestion.impacts_rom && <QualityIndicator type="ROM" />}
        { suggestion.impacts_vizient && <QualityIndicator type="Vizient" />}

        <div>{suggestion.diagnosis.alternative_diagnoses.length} possible diagnosis codes: <Link to={'/workflow/' + id}>View all <Icon icon="arrow-right" /></Link></div>
      </Grid>
      <Grid sm={4} xs={12}>
        <Grid className="diagnosis-summary-charts" container spacing={2}>
          {map(groupBy(observations, 'name'), (data, name) => {
            let nonNumeric = [
              'Non-invasive ventilation',
              'NPO',
              '1:1 Observation',
              '2-point restraints',
              'UA Sediment',
              'Quetiapine PO'
            ]
            if(nonNumeric.includes(name)) {
              return <Grid item xs={4}>
                <div className="summary-chart">
                  <div className="summary-chart-title">
                    <span className="summary-chart-title-label">{data[0].name}:</span>
                    <br />
                    <span className="summary-chart-title-value">{data[0].value}</span>
                  </div>
                </div>
              </Grid>
            }
            return <SparkLine diagnosis={diagnosis} width={120} height={50} data={data} />
          })}
        </Grid>
      </Grid>
      <Grid item sm={2} xs={12}>
        <Grid container justify="flex-end">
          <QueryCta setStatus={setStatus} next="query" status={status} id={id} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DiagnosisSummarized;
