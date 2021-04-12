import React from 'react'
import RefetchData from './refetch-data/Chat'
import Subscription from './subscription/Chat'

function Strategy({ strategy }) {
  if (strategy === 'subscription') {
    return <Subscription />
  }
  return <RefetchData />
}

export default Strategy
