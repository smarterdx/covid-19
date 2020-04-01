import React, { useState } from 'react'
import './style.scss';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../SearchBar'
import Dashboard from '../Dashboard'
import Filters from '../Filters'
import { sortBy } from 'lodash'
import { useSuggestions } from '../../hooks/suggestions'
import CovidSummarized from '../CovidSummarized'
import Loader from '../ui/Loader'
import matchSorter from 'match-sorter'

export default function CovidList(props) {
  let suggestions = useSuggestions()

  const [selectedFilter, setSelectedFilter] = useState('all')
  const [search, setSearch] = useState('')
  // currentLocation = currentLocation

  if(props.currentLocation !== null) {
    suggestions = suggestions.filter((s) => {
      if(s.hospitalstay.current_location === props.currentLocation) return true
    }
    )
  }

  if(suggestions) {
    suggestions = matchSorter(suggestions, search, { keys: ['primary_diagnosis', 'patient.first_name', 'patient.last_name', 'patient.mrn', 'treatment_team_physicians.first_name', 'treatment_team_physicians.last_name',] })
  }

  suggestions = sortBy(suggestions, ({ covid_star }) => ['3', '2', '1'].indexOf(covid_star))

  suggestions = suggestions.filter((s) => {
    if(selectedFilter === 'all') return true

    return s.covid_star === selectedFilter
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
        <CovidSummarized
        id={s.id}
        key={s.id}
        suggestion="Suggestion"
        covidValue={s.covid_star}
        patientFirstName={s.patient.first_name}
        patientLastName={s.patient.last_name}
        patientLocation={s.hospitalstay.current_location}
        patientMrn={s.patient.mrn}
        patientAccount={s.hospitalstay.account}
        physicianFirstName={s.hospitalstay.treatment_team_physicians[0].first_name}
        physicianLastName={s.hospitalstay.treatment_team_physicians[0].last_name}
        diagnosis={s.primary_diagnosis}
        covidRating={s.covid_star}
        observations={s.hospitalstay.observation_aggregates.concat(s.hospitalstay.latest_observations)}
      />
      ))}
      </>
      :
      <Loader />
    }
    </>
  )
}