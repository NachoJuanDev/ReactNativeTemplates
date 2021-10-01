import React from 'react'

import { View, Text, Button, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRandomCoffe } from '../ducks/coffe'
import { incrementCounter } from '../ducks/count'

function Home(props) {
  const { counter } = useSelector(state => state.Count)
  const { loading, data } = useSelector(state => state.Coffe)

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementCounter(1))
  }

  const decrement = () => {
    dispatch(incrementCounter(-1))
  }

  const getRandomCoffe = () => {
    dispatch(fetchRandomCoffe())
  }

  return (
    <View>
      <Text>Hello World!</Text>
      <Text>Counter: {counter}</Text>
      <Button onPress={increment} title="Increment" />
      <Button onPress={decrement} title="Decrement" />
      <Button onPress={getRandomCoffe} title="Get Coffe" />
      {loading && <ActivityIndicator />}
      {!loading && !!data.blend_name && <Text>{data.blend_name}</Text>}
    </View>
  )
}

export default Home
