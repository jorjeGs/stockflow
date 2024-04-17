import React from 'react'
import Index from './app/index'
import { RootSiblingParent } from 'react-native-root-siblings'

export default function App () {
  return (
    <RootSiblingParent>
      <Index />
    </RootSiblingParent>
  )
}
