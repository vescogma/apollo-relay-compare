import React from 'react'
import ReactDOM from 'react-dom'
import { WebSocketLink } from '@apollo/client/link/ws'
import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { getMainDefinition } from '@apollo/client/utilities'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: { reconnect: true },
})

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
