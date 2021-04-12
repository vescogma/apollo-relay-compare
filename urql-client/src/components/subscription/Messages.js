import React from 'react'
import { useSubscription, useClient, gql } from 'urql'
import { format } from 'date-fns'

const ChatsQuery = gql`
  query {
    chats {
      id
      from
      message
      timestamp
    }
  }
`

const ChatSubscription = gql`
  subscription {
    messageSent {
      id
      from
      message
      timestamp
    }
  }
`

const Messages = () => {
  const client = useClient()

  const [{ data }] = useSubscription(
    { query: ChatSubscription },
    (chats = [], response) => {
      return [response.messageSent, ...chats]
    },
  )
  const [initial, setInitial] = React.useState([])
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    console.log('im running a lot')
    client.query(ChatsQuery)
      .toPromise()
      .then(res => {
        setInitial(res.data.chats.slice().reverse())
      })
  }, [client])

  React.useEffect(() => {
    setMessages([...(data ?? []), ...initial])
  }, [initial, data])

  return (messages ?? []).map(({ id, from, message, timestamp }) => (
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
