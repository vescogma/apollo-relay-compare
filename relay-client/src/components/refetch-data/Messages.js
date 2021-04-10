import React from 'react'
import { usePreloadedQuery } from 'react-relay/hooks'
import { format } from 'date-fns'

const Messages = ({ query, queryReference, refresh }) => {
  const data = usePreloadedQuery(query, queryReference)

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
