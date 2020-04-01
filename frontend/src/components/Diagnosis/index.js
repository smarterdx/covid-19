import React, { useState } from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import PersonDetails from '../PersonDetails';
import QueryCta from '../QueryCta';
import StatusBadge from '../StatusBadge';
import QualityIndicator from '../QualityIndicator';
import Text from '../ui/Text';
import Detail from '../ui/Detail';
import Divider from '../ui/Divider';
import Table from '../ui/Table';
import CustomChart from '../ui/CustomChart';
import{ groupBy, map } from 'lodash';
import { Icon } from '../ui/Icon';
import avatar from '../../assets/user-avatar.svg';
import moment from 'moment'
import { sortBy, last } from 'lodash';
import DiagnosisSearch from '../DiagnosisSearch';
import dxData from '../../diagnosis-data'

const Diagnosis = ({
  id,
  status: initialStatus,
  suggestion,
  patient,
  hospitalStay,
  patientFirstName,
  patientLastName,
  patientMrn,
  patientAccount,
  patientLocation,
  patientInsurance,
  patientService,
  physicianFirstName,
  physicianLastName,
  physicianEmail,
  physicianPhone,
  diagnosis
}) => {
  let [alternativeDiagnoses, setAlternativeDiagnoses] = useState(diagnosis.alternative_diagnoses || new Set())
  let [selectedDiagnoses, setSelectedDiagnoses] = useState(diagnosis.selectedDiagnoses || new Set())
  const [ editingRecipient, setEditingRecipient ] = useState(false)
  const [ showAdditional, setShowAdditional ] = useState(false)
  const toggleAdditional = () => setShowAdditional(!showAdditional)
  const [ status, setStatusState ] = useState(initialStatus)

  const setStatus = (newStatus) => {
    suggestion.cdi_review_status = newStatus
    setStatusState(newStatus)
  }

  let dxConfig = dxData[diagnosis.diagnosis_desc] || {}
  console.log(dxConfig)

  let observationsByName = groupBy(patient.observations, 'name')

  return (
    <div className="diagnosis expanded">
      <Grid container spacing={10}>
        <Grid item xs={12} sm={3} className="dx-metadata">
          <Grid container direction="column">
            <div className="patient-details">
              <h2>Patient</h2>
              <img className="patient-avatar" src={avatar} />
              <Grid container className="patient-name">
                <Icon icon="patient" className="patient-icon" tertiary size={18}/>
                {patientFirstName} {patientLastName}
              </Grid>
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
              <Detail
                label="Insurance"
                value={patientInsurance}
              />
              <Detail
                label="Service"
                value={patientService}
              />
            </div>

            <h2>Impact</h2>
            <div>
              {dxConfig.Revenue != null && (
                <QualityIndicator type="Revenue" quality={dxConfig.Revenue} />
              )}
              {suggestion.is_poa && <QualityIndicator type="POA" />}
              {suggestion.impacts_elixhauser && <QualityIndicator type="Elixhauser" />}
              {suggestion.impacts_hcc && <QualityIndicator type="HCC" />}
              {suggestion.impacts_psi && <QualityIndicator type="PSI" />}
              {suggestion.impacts_rom && <QualityIndicator type="ROM" />}
              {suggestion.impacts_vizient && <QualityIndicator type="Vizient" />}
            </div>

            <h2>DRG</h2>
            <div className="drg">
              <span className="drg-code">{hospitalStay.current_msdrg.drg_number}</span>
              <div className="drg-descriptor">{hospitalStay.current_msdrg.description}</div>
            </div>

            <h2>Secondary Diagnoses</h2>
            <ul>
              {hospitalStay.current_diagnoses.map(({ diagnosis_desc }) =>
                <li>{diagnosis_desc}</li>
              )}
            </ul>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Grid container spacing={5}>
            <Grid item xs={8}>
              <h2>Diagnosis</h2>
              <div className="diagnosis-name">{diagnosis.diagnosis_desc}</div>
              { status === 'pending' ?
                <>
                  { alternativeDiagnoses.length ?
                    <>
                      <div>{alternativeDiagnoses.length} possible diagnosis code{diagnosis.alternative_diagnoses.length != 1 && 's'}: </div>
                      <ul className="alt-diagnosis-list">
                        {alternativeDiagnoses.map((d) => {
                          const selected = selectedDiagnoses.has(d.diagosis_icd10)
                          if(!selected && ['sent_to_provider', 'provider_declined', 'provider_accepted'].includes(status)) {
                            return null
                          }
                          return <li>
                            <Grid
                              container
                              onClick={(e) => {
                                e.preventDefault()
                                let newSelection = new Set(selectedDiagnoses)
                                if(selected) {
                                  newSelection.delete(d.diagosis_icd10)
                                } else {
                                  newSelection.add(d.diagosis_icd10)
                                }
                                diagnosis.selectedDiagnoses = newSelection
                                setSelectedDiagnoses(newSelection)
                              }}
                            >
                              <Grid item className="accept-reject">
                                <a
                                  href="/#"
                                  className={"accept-button" + (selected ? ' selected' : '')}
                                ><Icon icon="check" size={12} /></a>
                              </Grid>
                              <Grid item className="alt-diagnosis">
                                {d.diagnosis_desc} ({d.diagosis_icd10})
                              </Grid>
                            </Grid>
                          </li>
                        })}
                        <li>
                          <Grid container>
                            <a className="add-button" onClick={toggleAdditional}><Icon icon="plus" size={16} />Add additional option</a>
                            {showAdditional && <DiagnosisSearch onSelect={(dx) => {
                              let newSelection = new Set(selectedDiagnoses)
                              newSelection.add(dx.diagosis_icd10)
                              diagnosis.selectedDiagnoses = newSelection
                              setSelectedDiagnoses(newSelection)

                              diagnosis.alternative_diagnoses.push(dx)
                              setAlternativeDiagnoses(diagnosis.alternative_diagnoses.slice(0))
                              toggleAdditional()
                            }} />}
                          </Grid>
                        </li>
                      </ul>
                    </>
                    :
                    <ul className="alt-diagnosis-list">
                      <li>
                        <Grid container>
                          <a className="add-button"><Icon icon="plus" size={16} />Add diagnosis code</a>
                        </Grid>
                      </li>
                    </ul>
                  }
                </>
                :
                <>
                  { diagnosis.alternative_diagnoses.length ?
                    <>
                      <div>{diagnosis.alternative_diagnoses.length} diagnosis code{diagnosis.alternative_diagnoses.length != 1 && 's'} sent: </div>
                      <ul className="alt-diagnosis-list read-only">
                      {diagnosis.alternative_diagnoses.map(d =>
                        <li>
                          {d.diagnosis_desc} {d.diagosis_icd10}
                        </li>
                      )}
                      </ul>
                    </>
                    :
                    <div>No diagnosis codes sent</div>
                  }
                </>
              }

            </Grid>
            <Grid item xs={4} style={{ marginTop: 20 }}>
              <div className="action-container">
                <StatusBadge status={status} label />
                <QueryCta setStatus={setStatus} status={status} id={id} next="query" />

                <Divider />

                <div className="case-contact">
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <h3>Case contact</h3>
                    </Grid>
                    <Grid item>
                      <a onClick={() => setEditingRecipient(true)}><Icon className="recipient-edit-icon" icon="edit" size={14} /> Change</a>
                    </Grid>
                  </Grid>
                  <div className="editable-contact">
                    <PersonDetails
                      provider
                      firstName={physicianFirstName}
                      lastName={physicianLastName}
                      email={physicianEmail}
                      phone={physicianPhone}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <h2>Hospitalization Details</h2>

          <h4>Evidence for Diagnosis</h4>
          {map(observationsByName, (data, name) => {
            if(!data || data.length <= 1) return null
            data = sortBy(data, 'date')

            let lastDate = moment(last(data).date)
            let tableOnly = ['Resp Device', 'Diet', 'Observation', 'a1c'].includes(name)

            return <div className="evidence-container">
              <Grid className="evidence-header" container spacing={2} alignItems="center">
                <Grid item>
                  <h3>{name}</h3>
                </Grid>
                <Grid item>
                  <Text secondary>
                    Last reading on <b>{lastDate.format('MMM Do')}</b> at <b>{lastDate.format('hh:mma')}</b>
                  </Text>
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                {!tableOnly && <Grid item xs={12} sm={6}>
                  <CustomChart
                    data={data}
                  />
                </Grid>}
                <Grid item xs={12} sm={tableOnly ? 12 : 6}>
                  <Table
                    data={data}
                  />
                </Grid>
              </Grid>
            </div>
          })}

          {/*<Grid container spacing={4}>
            <Grid item xs={4}>
              <div className="orders">
                <h4>Orders</h4>
                <ul>
                  <li>
                    <Grid container>
                      <Grid item className="icon-container">
                        <Icon icon="check" size={14} />
                      </Grid>
                      <Grid item className="list-item-container">
                        NPO Ordered
                      </Grid>
                    </Grid>
                  </li>
                  <li>
                    <Grid container>
                      <Grid item className="icon-container">
                        <Icon icon="check" size={14} />
                      </Grid>
                      <Grid item className="list-item-container">
                        Seroquel Ordered
                      </Grid>
                    </Grid>
                  </li>
                  <li>
                    <Grid container>
                      <Grid item className="icon-container">
                        <Icon icon="check" size={14} />
                      </Grid>
                      <Grid item className="list-item-container">
                        Restraints Ordered
                      </Grid>
                    </Grid>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="hacs">
                <h4>HACs</h4>
                <ul>
                  <li>
                    <Grid container>
                      <Grid item className="icon-container">
                        <Icon icon="warning" size={14} />
                      </Grid>
                      <Grid item className="list-item-container">
                        Blood Incompatibility
                      </Grid>
                    </Grid>
                  </li>
                  <li>
                    <Grid container>
                      <Grid item className="icon-container">
                        <Icon icon="warning" size={14} />
                      </Grid>
                      <Grid item className="list-item-container">
                        Manifestations of Poor Glycemic Control - Diabetic Ketoacidosis
                      </Grid>
                    </Grid>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>*/}

        </Grid>
      </Grid>
    </div>
  );
}

export default Diagnosis;

const HGB_DATA = [
  {
    name: 'Sep 3, 5:14am', HGB: 7.1, HCT: 21.4, RBC: 2.37,
  },
  {
    name: 'Sep 4, 6:04am', HGB: 7.2, HCT: 21.1, RBC: 2.42,
  },
  {
    name: 'Sep 4, 10:21am', HGB: 6.9, HCT: 21.2, RBC: 2.32,
  },
  {
    name: 'Sep 5, 5:53am', HGB: 7.0, HCT: 21.6, RBC: 2.46,
  }
];
