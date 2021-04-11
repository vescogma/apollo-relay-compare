import React from 'react'
import InputBox from './InputBox'
import Messages from './Messages'

function Chat() {
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
        <Messages />
      </section>
      <section style={{ paddingTop: '1rem' }}>
        <InputBox />
      </section>
    </main>
  )
}

export default Chat
