import React from 'react'
import ReactDOM from 'react-dom'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { environment } from './utils/relay-environment'

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
