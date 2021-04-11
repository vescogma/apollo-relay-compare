import React from 'react'
import { useMutation, gql } from 'urql'

const SendMsgMutation = gql`
  mutation ($message: String!) {
    sendMessage(from: "urql-client", message: $message) {
      id
      from
      message
      timestamp
    }
  }
`

const InputBox = () => {
  const inputRef = React.useRef(null)
  const [{ fetching, error }, sendMessage] = useMutation(SendMsgMutation)

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        sendMessage({ message: inputRef.current.value })
        inputRef.current.value = ''
      }}
    >
      <input ref={inputRef} disabled={fetching} />
      <button type="submit" disabled={fetching}>
        Send
      </button>
      {fetching && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </form>
  )
}

export default InputBox
