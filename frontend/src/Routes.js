import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Diagnosis from './components/Diagnosis'
import PageContent from './components/ui/PageContent'
import Loader from './components/ui/Loader'
import Header from './components/Header'
import { useSuggestion } from './hooks/suggestions'
import FakeLogin from './components/FakeLogin'
import CovidList from './components/CovidList'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const LOCATIONS = gql`
query locations {
  hospitalstay(distinct_on: current_location) {
    current_location
  }
}
`

function AppRouter() {
  const [currentLocation, setLocation] = useState(null)
  const { loading, error, data: locations } = useQuery(LOCATIONS);
  if(!locations) return null
  console.log(currentLocation)

  return (
    <Router>
      <PageContent>
        <Route
          render={routeProps => (
            <>
              {/* <Header /> */}
              <FakeLogin {...routeProps} />
            </>
          )}
          path="/"
          exact
        />
        <Route
          render={routeProps => (
            <>
              <Header locations={locations.hospitalstay} currentLocation={currentLocation} setLocation={setLocation} />
              <CovidList currentLocation={currentLocation} {...routeProps} />
            </>
          )}
          path="/covid"
          exact
        />
        <Route
          path="/login"
          render={routeProps => (
            <>
              {/* <Header /> */}
              <FakeLogin {...routeProps} />
            </>
          )}
          exact
        />
      </PageContent>
    </Router>
  )
}

export default AppRouter
