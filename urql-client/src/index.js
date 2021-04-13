import React from 'react'
import ReactDOM from 'react-dom'
import {
  createClient,
  Provider,
  dedupExchange,
  // cacheExchange as basicExchange,
  fetchExchange,
  subscriptionExchange,
  gql,
} from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { devtoolsExchange } from '@urql/devtools'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import './index.css'
import schema from './schema.json'
import App from './App'
import reportWebVitals from './reportWebVitals'

const subscriptionClient = new SubscriptionClient('ws://localhost:4000', {
  reconnect: true,
})

const query = gql`
  query {
    chats {
      id
      from
      message
      timestamp
    }
  }
`

const client = createClient({
  url: 'http://localhost:4000',
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange({
      schema,
      keys: {
        Chat: data => data.id,
      },
      updates: {
        Mutation: {
          sendMessage(result, args, cache, info) {
            cache.updateQuery({ query }, data => ({
              ...data,
              chats: [...data.chats, result.sendMessage],
            }))
          },
        },
        Subscription: {
          messageSent(result, args, cache, info) {
            if (result.messageSent.from !== 'urql-client') {
              cache.updateQuery({ query }, data => ({
                ...data,
                chats: [...data.chats, result.messageSent],
              }))
            }
          },
        },
      },
    }),
    fetchExchange,
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
