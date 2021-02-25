import { createStore } from 'redux'

const initialState = { greeting: '안녕하세요~ 리덕스 공부 중 입니다!' }

const reducer = (state, action) => {
  console.log(action)
  if (action.type === 'change message') {
    return {
      ...state,
      greeting: action.payload,
    }
  }
  return state
}
const store = createStore(reducer, initialState)

export default store
