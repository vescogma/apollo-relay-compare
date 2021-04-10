import React from 'react'
import ModifyCacheDirectly from './modify-local-cache/Chat'
import RefetchData from './refetch-data/Chat'
import Subscription from './subscription/Chat'

function Strategy({ strategy }) {
  if (strategy === 'subscription') {
    return <Subscription />
  }
  if (strategy === 'refetch-data') {
    return <RefetchData />
  }
  return <ModifyCacheDirectly />
}

export default Strategy
