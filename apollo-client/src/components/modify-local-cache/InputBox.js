import React from 'react'
import { useMutation, gql } from '@apollo/client'

const SEND_MESSAGE = gql`
  mutation SendMessageMutation($message: String!) {
    sendMessage(from: "apollo-client", message: $message) {
      id
      from
      message
      timestamp
    }
  }
`

const InputBox = () => {
  const inputRef = React.useRef(null)
  const [sendMessage, { loading, error }] = useMutation(SEND_MESSAGE, {
    update(cache, { data: { sendMessage } }) {
      cache.modify({
        fields: {
          chats(currentChats = []) {
            const newChatRef = cache.writeFragment({
              data: sendMessage,
              fragment: gql`
                fragment NewChat on Chat {
                  id
                  from
                  message
                  timestamp
                }
              `,
            })
            return [...currentChats, newChatRef]
          },
        },
      })
    },
  })

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        sendMessage({ variables: { message: inputRef.current.value } })
        inputRef.current.value = ''
      }}
    >
      <input ref={inputRef} disabled={loading} />
      <button type="submit" disabled={loading}>
        Send
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </form>
  )
}

export default InputBox
