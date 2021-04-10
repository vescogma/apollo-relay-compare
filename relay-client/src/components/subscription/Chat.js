import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useQueryLoader } from 'react-relay/hooks'
import Messages from './Messages'
import InputBox from './InputBox'

const ChatQuery = graphql`
  query ChatSubQuery {
    chats {
      id
      from
      message
      timestamp
    }
  }
`

function Chat() {
  const [queryReference, loadQuery] = useQueryLoader(ChatQuery)

  React.useEffect(() => {
    if (!queryReference) {
      loadQuery()
    }
  }, [queryReference, loadQuery])

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
        <React.Suspense fallback={<p>Loading...</p>}>
          {queryReference != null && (
            <Messages query={ChatQuery} queryReference={queryReference} />
          )}
        </React.Suspense>
      </section>
      <section style={{ paddingTop: '1rem' }}>
        <InputBox
          // onSendMessage={() =>
          //   loadQuery(null, { fetchPolicy: 'store-and-network' })
          // }
        />
      </section>
    </main>
  )
}

export default Chat
