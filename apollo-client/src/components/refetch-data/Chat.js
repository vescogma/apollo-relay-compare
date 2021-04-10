import React from 'react'
import { useQuery, gql } from '@apollo/client'
import InputBox from './InputBox'
import Messages from './Messages'

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

function Chat() {
  const { loading, error, data, refetch } = useQuery(GET_CHATS)

  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem 2rem',
        overflow: 'hidden',
      }}
    >
      <section style={{ flex: 1, overflow: 'auto' }}>
        <Messages loading={loading} error={error} data={data} />
      </section>
      <section style={{ paddingTop: '1rem' }}>
        <InputBox onSendMessage={refetch} />
      </section>
    </main>
  )
}

export default Chat
