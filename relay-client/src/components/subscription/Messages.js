import React from 'react'
import { format } from 'date-fns'
import graphql from 'babel-plugin-relay/macro'
import { usePreloadedQuery, useSubscription } from 'react-relay/hooks'

const MessagesSubscription = graphql`
  subscription MessagesSubscription {
    messageSent {
      id
      from
      message
      timestamp
    }
  }
`

const Messages = ({ query, queryReference }) => {
  const data = usePreloadedQuery(query, queryReference)

  const config = React.useMemo(() => ({
    variables: null,
    subscription: MessagesSubscription,
    updater: store => {
      const record = store.getRootField('messageSent')
      const root = store.getRoot()
      const chats = root.getLinkedRecords('chats')
      chats.push(record)
      root.setLinkedRecords(chats, 'chats')
    },
  }), [])

  useSubscription(config)

  return data.chats
    .slice()
    .reverse()
    .map(({ id, from, message, timestamp }) => (
      <div key={id}>
        <p>
          <span>
            <b>
              <code>time&nbsp;</code>
            </b>{' '}
            {format(timestamp, 'HH:mm:ss')}
          </span>
          <br />
          <span>
            <b>
              <code>from&nbsp;</code>
            </b>{' '}
            {from}
          </span>
          <br />
          <span>
            <b>
              <code>text&nbsp;</code>
            </b>{' '}
            {message}
          </span>
        </p>
      </div>
    ))
}

export default Messages
