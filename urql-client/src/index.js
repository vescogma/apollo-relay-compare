import React from 'react'
import ReactDOM from 'react-dom'
import {
  createClient,
  Provider,
  defaultExchanges,
  subscriptionExchange,
} from 'urql'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const subscriptionClient = new SubscriptionClient('ws://localhost:4000', {
  reconnect: true,
})

const client = createClient({
  url: 'http://localhost:4000',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription(operation) {
        return subscriptionClient.request(operation)
      },
    }),
  ],
})

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
