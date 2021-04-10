import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay/hooks'

const InputBoxMutation = graphql`
  mutation InputBoxSubMutation($message: String!) {
    sendMessage(from: "relay-client", message: $message) {
      id
      from
      message
      timestamp
    }
  }
`

const InputBox = () => {
  const inputRef = React.useRef(null)
  const [commit, isInFlight] = useMutation(InputBoxMutation)

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        commit({ variables: { message: inputRef.current.value } })
        inputRef.current.value = ''
      }}
    >
      <input ref={inputRef} disabled={isInFlight} />
      <button type="submit" disabled={isInFlight}>
        Send
      </button>
    </form>
  )
}

export default InputBox
