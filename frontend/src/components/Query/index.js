import React, { useState } from 'react';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import Container from '../ui/Container';
import ResultsBlock from '../ui/ResultsBlock';
import Table from '../ui/Table';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Divider from '../ui/Divider';
import Text from '../ui/Text';
import { Icon } from '../ui/Icon';
import PersonDetails from '../PersonDetails';
import { Link } from 'react-router-dom';
import { useSuggestion } from '../../hooks/suggestions'
import { groupBy, sortBy, map, last } from 'lodash'
import moment from 'moment'

// let sentence = {
// 15: "Your patient had: A1C 7.1, glucose 352, and insulin order on 8/2",
// 11: "Your patient had: Hb 5.4, Plt 88, and WBC 1.2, and repeat CBC order on 8/3",
// 16: "Your patient had: Plt 121 and repeat CBC order on 8/1",
// 5: "Your patient had: SpO2 78%, RR 28, and 6L NC on 8/3",
// 12: "Your patient had: BMI 40.3 and PT order on 8/2",
// 20: "Your patient had: 1:1 Observation, NPO order, and elderly age on 8/3",
// 10: "Your patient had: Cr 3.6 and Urine Sediment Casts on 8/3",
// 17: "Your patient had: Na 154 and repeat BMP order on 8/3",
// 13: "Your patient had: eGFR 15 - 30 throughout their admission",
// 19: "Your patient had: Na 131 and repeat BMP order on 8/5",
// 8: "Your patient had: HR 123, T 38.6, WBC 16.1, RR 21 and Vancomycin order on 8/3",
// 22: "Your patient had: Na 128 and repeat BMP order on 8/5"
// }

const Query = (props) => {
  let id = props.match.params.id
  if(id !== 'next') {
    id = parseInt(id, 10)
  }
  let { suggestion } = useSuggestion(id)

  const [ queryNote, setQueryNote ] = useState('')
  const [ editingRecipient, setEditingRecipient ] = useState(false)


  if(!suggestion) return null

  let observationsByName = groupBy(suggestion.patient.observations, 'name')

  return (
    <div className="query">
      <Container box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <h2>Your query</h2>

            <Grid container style={{ margin: "30px 0 10px 0" }} alignItems="center">
              <Grid item>
                <h3 style={{ margin: 0 }}>Recipient</h3>
              </Grid>
              <Grid item>
                <a onClick={() => setEditingRecipient(true)}><Icon className="recipient-edit-icon" icon="edit" size={14} /> Change</a>
              </Grid>
            </Grid>
            <div className="editable-contact">
              <PersonDetails
                provider
                firstName={suggestion.current_physician.first_name}
                lastName={suggestion.current_physician.last_name}
                email={suggestion.current_physician.email}
                phone={suggestion.current_physician.phone}
              />
            </div>

            <h3>Add note</h3>
            <Input textarea value={queryNote} onChange={(e) => setQueryNote(e.target.value)} />

            <Link to="/success" onClick={() => { suggestion.cdi_review_status = 'sent_to_provider' }}><Button>Send query</Button></Link>
          </Grid>

          <Grid item xs={12} sm={6}>
            <h2>Preview</h2>
            <div className="query-preview">
              <Grid container spacing={4} className="query-preview-content">

                <Grid item xs={12}>
                  <p>Dear Dr. {suggestion.current_physician.last_name},</p>

                  <Text primary>We would like to clarify the diagnoses on the following patient:</Text>
                  <PersonDetails
                    patient
                    firstName={suggestion.patient.first_name}
                    lastName={suggestion.patient.last_name}
                    mrn={suggestion.patient.mrn}
                    account={suggestion.patient.account}
                  />

                  <Text Primary>Your patient had: {suggestion.diagnostic_reasoning}. Using your independent clinical judgment,
                  does this mean the patient has one of the following
                  diagnoses? If yes, please be sure to add that to your
                  documentation.</Text>

                  {queryNote &&
                    <Grid item xs={12}>
                      <h3>Note from your CDI team:</h3>
                      <Text className="cdi-note">{queryNote}</Text>
                    </Grid>
                  }

                  <Divider />

                  <h3>Example Diagnoses:</h3>
                  <ul>
                    {suggestion.diagnosis.alternative_diagnoses.map((d) => {
                      const selected = suggestion.diagnosis.selectedDiagnoses && suggestion.diagnosis.selectedDiagnoses.has(d.diagosis_icd10)
                      const anySelected = suggestion.diagnosis.selectedDiagnoses && suggestion.diagnosis.selectedDiagnoses.size !== 0
                      if(anySelected && !selected) return null
                      return <li>
                        <Grid container justify="space-between" alignItems="center">
                          <Grid item><b>{d.diagnosis_desc}</b> ({d.diagosis_icd10})</Grid>
                          <Grid item><a>Accept</a></Grid>
                        </Grid>
                      </li>
                    })}
                  </ul>

                  <Grid container justify="space-between" alignItems="center" className="reject-all">
                    <Grid item>All of these look incorrect?</Grid>
                    <Grid item><a>Reject all</a></Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <h3>Supporting evidence</h3>
                  {map(observationsByName, (data, name) => {
                    if(!data) return null
                    data = sortBy(data, 'date')

                    let lastDate = moment(last(data).date)

                    return (
                      <ResultsBlock title={name} date={lastDate.format('MMM Do hh:mma')}>
                        <Table data={data} />
                      </ResultsBlock>
                    )
                  })}
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Query;
