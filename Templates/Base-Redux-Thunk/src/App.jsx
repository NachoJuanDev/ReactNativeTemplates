import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './ducks'
import AppNavigator from './navigation/AppNavigator'
import services from './services'

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(thunk.withExtraArgument(services)), // Delete this line if you don't need thunk
)

function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
