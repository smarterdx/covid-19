import React from 'react'
import AppRoutes from './Routes'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
})

function App() {
  return <ApolloProvider client={client}>
    <AppRoutes />
  </ApolloProvider>
}

export default App
