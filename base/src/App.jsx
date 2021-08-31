import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './navigation/AppNavigator'

function App(props) {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App
