import { useQuery, gql } from '@apollo/client'
import { format } from 'date-fns'

const GET_CHATS = gql`
  query GetChatsQuery {
    chats {
      id
      from
      message
      timestamp
    }
  }
`

const Messages = () => {
  const { loading, error, data } = useQuery(GET_CHATS)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error :(</p>
  }

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
