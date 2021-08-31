import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'

const AppStack = createNativeStackNavigator()

function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
