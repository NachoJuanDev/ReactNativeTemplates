// Initial State
const initialState = {
  loading: false,
  data: {},
}
// Actions
const SET_COFFE = 'COFFE/SET_COFFE'
const TOGGLE_LOADING = 'COFFE/TOGGLE_LOADING'

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_COFFE:
      return { ...state, data: payload }
    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading }
    default:
      return state
  }
}

// Action Creators
export const setCoffe = payload => ({
  type: SET_COFFE,
  payload,
})

export const toggleLoading = payload => ({
  type: TOGGLE_LOADING,
})

// Thunks
export const fetchRandomCoffe = () => async (dispatch, getState, services) => {
  dispatch(toggleLoading())
  const { get } = services

  const data = await get('https://random-data-api.com/api/coffee/random_coffee')

  dispatch(setCoffe(data))

  dispatch(toggleLoading())
}
