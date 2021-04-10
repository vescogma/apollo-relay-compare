import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
} from 'relay-runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { gqlFetch } from './relay-query'

const fetchRelay = async (params, variables) => {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
  return gqlFetch(params.text, variables)
}

const subscriptionClient = new SubscriptionClient('ws://localhost:4000', {
  reconnect: true,
})

const subscribe = (request, variables) => {
  const subscribeObservable = subscriptionClient.request({
    query: request.text,
    operationName: request.name,
    variables,
  })

  return Observable.from(subscribeObservable)
}

export const environment = new Environment({
  network: Network.create(fetchRelay, subscribe),
  store: new Store(new RecordSource()),
})
