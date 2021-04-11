import React from 'react'
import AutomaticCache from './automatic-cache/Chat'
import Subscription from './subscription/Chat'

function Strategy({ strategy }) {
  if (strategy === 'subscription') {
    return <Subscription />
  }
  return <AutomaticCache />
}

export default Strategy
