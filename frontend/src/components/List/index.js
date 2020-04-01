import React, { useState } from 'react'
import './style.scss';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../SearchBar'
import Dashboard from '../Dashboard'
import Filters from '../Filters'
import { useSuggestions } from '../../hooks/suggestions'
import { sortBy } from 'lodash'
import DiagnosisSummarized from '../DiagnosisSummarized'
import CovidSummarized from '../CovidSummarized'
import Loader from '../ui/Loader'
import matchSorter from 'match-sorter'

export default function List() {
  throw new Error('FUCK')
  let { suggestions } = useSuggestions()
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [search, setSearch] = useState('')

  if(suggestions) {
    suggestions = matchSorter(suggestions, search, { keys: ['diagnosis.diagnosis_desc', 'diagnosis.diagosis_icd10', 'patient.first_name', 'patient.last_name', 'patient.mrn', 'current_physician.first_name', 'current_physician.last_name',] }) // ['hi', 'hey', 'hello']
  }
  suggestions = sortBy(suggestions, ({ id }) => [5,8,10,11,12,13,15,16,17,19,20,22].indexOf(id))
  suggestions = sortBy(suggestions, ({ cdi_review_status }) => ['sent_to_provider', 'pending', 'provider_documented', 'provider_declined', 'cdi_declined'].indexOf(cdi_review_status))

  suggestions = suggestions.filter((s) => {
    if(selectedFilter === 'all') return true

    if(selectedFilter === 'completed') {
      return [
        'cdi_declined',
        'provider_documented',
        'provider_declined'
      ].includes(s.cdi_review_status)
    }

    return s.cdi_review_status === selectedFilter
  })

  return (
    <>
      <Dashboard />
      <Grid className="filters-container" container justify="space-between" alignItems="center">
        <Grid item>
          <SearchBar onChange={setSearch} value={search} />
        </Grid>
        <Grid item>
          <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        </Grid>
      </Grid>
      { suggestions ?
        <>
          {suggestions.map(s => (
              <DiagnosisSummarized
                id={s.id}
                key={s.id}
                suggestion={s}
                status={s.cdi_review_status}
                patientFirstName={s.patient.first_name}
                patientLastName={s.patient.last_name}
                patientLocation={s.patient.current_location}
                patientMrn={s.patient.mrn}
                patientAccount={s.patient.account}
                observations={s.patient.observations}
                physicianFirstName={s.current_physician.first_name}
                physicianLastName={s.current_physician.last_name}
                diagnosis={s.diagnosis.diagnosis_desc}
                reasoning={s.diagnostic_reasoning}
              />
            ))}
        </>
        :
        <Loader />
      }
    </>
  )
}
