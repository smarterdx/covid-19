import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const SUGGESTIONS_QUERY = gql`
query Suggestions {
  suggestion {
    id
    primary_diagnosis
    covid_star: covid_stars
    hospitalstay {
      id
      account
      current_location
      treatment_team_physicians {
        first_name
        last_name
      }
      observation_aggregates {
        name
        max
        min
      }
      latest_observations: observations(distinct_on: name, order_by: {name: desc, date: desc}, where: {name: {_in: ["heart_rate", "systolic_blood_pressure", "diastolic_blood_pressure", "mean_blood_pressure", "temperature", "respiratory_rate", "oxygen_saturation", "oxygen_device", "nasal_cannula_flow_rate", "high_flow_nasal_cannula", "procalcitonin", "wbc_count", "lymphocyte_count", "d-dimer", "c_reactive_protein", "esr", "ferritin", "creatinine", "respiratory_viral_panel", "sputum_culture", "blood_culture", "IL-6", "lactate", "troponin", "mrsa_nasal_pcr", "sars_cov_2", "ck", "hiv"]}}) {
        name
        value
      }
    }
    patient {
      first_name
      last_name
      mrn
    }
  }
}
`
export function useSuggestions() {
  const { error, data: { suggestion = [] } = {} } = useQuery(SUGGESTIONS_QUERY);

  if(error) return { error }

  return suggestion
}
export function useSuggestion() {
  const { error, data: { suggestions = [] } = {} } = useQuery(SUGGESTIONS_QUERY);

  if(error) return { error }

  return suggestions[0]
}