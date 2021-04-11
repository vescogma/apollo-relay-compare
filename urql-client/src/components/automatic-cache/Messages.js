import { useQuery, gql } from 'urql'
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

const Messages = () => {
  const [{ data, fetching, error }] = useQuery({ query: ChatsQuery })

  if (fetching) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error :(</p>
  }

  return (data?.chats ?? [])
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
