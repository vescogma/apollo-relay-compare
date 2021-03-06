import React from 'react'
import Strategy from './components/Strategy'

const STRAT = ['refetch-data', 'subscription']

function App() {
  const [strategy, setStrategy] = React.useState(STRAT[0])

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <header style={{ padding: '1rem 2rem' }}>
        <h2>Relay Client</h2>
        <p>State Management Strategy</p>
        <input
          type="radio"
          name="strategy"
          id={STRAT[0]}
          defaultChecked={true}
          onChange={() => setStrategy(STRAT[0])}
        />
        <label htmlFor={STRAT[0]}>Refetch Cache&nbsp;</label>
        <input
          type="radio"
          name="strategy"
          id={STRAT[1]}
          onChange={() => setStrategy(STRAT[1])}
        />
        <label htmlFor={STRAT[1]}>Subscription&nbsp;</label>
      </header>
      <Strategy strategy={strategy} />
    </div>
  )
}

export default App
