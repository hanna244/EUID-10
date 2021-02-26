// redux에서 createStore 모듈 추출
import { createStore } from 'redux'
import logoAnimationReducer from './reducers/logoAnimationReducer'

// createStore(reducer, initialState) → store { getState, dispatch, subscribe }
const store = createStore(logoAnimationReducer)

// 스토어(store) 내보내기
export { store }
