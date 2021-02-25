import { createStore } from 'redux'

const initialState = {
  greeting: '안녕!! 한나~',
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE_GREETING') {
    return {
      ...state,
      greeting: action.payload,
    }
  }
  return state
}

// {dispatch, getState, subscribe, replaceReducer}
const store = createStore(reducer, initialState)

export default store
