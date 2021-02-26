import { createStore } from 'redux'

const initialState = { greeting: '안녕하세요~ ' }

const reducer = (state, action) => {
  if (action.type === 'CHANGE_TEXT') {
    return { ...state, greeting: action.payload }
  }
  return state
}

const store = createStore(reducer, initialState)

export default store
