// Initial State
const initialState = {
  counter: 0,
}
// Actions
const INCREMENT_COUNTER = 'COUNT/INCREMENT_COUNTER'

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + payload }
    default:
      return state
  }
}

// Action Creators
export const incrementCounter = payload => ({
  type: INCREMENT_COUNTER,
  payload,
})
