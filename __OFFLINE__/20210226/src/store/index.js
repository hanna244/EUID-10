// redux에서 createStore 모듈 추출
import { createStore } from 'redux'

// 초기 상태(initial state)
const initialState = {
  animationClass: '',
}

// 스토어 리듀서(store reducer)
const storeReducer = (state, action) => {
  switch (action.type) {
    default:
    case 'run 함수 초기 실행':
      return state
    case '로고 애니메이션 정지':
      return {
        ...state,
        animationClass: '',
      }
    case '로고 애니메이션 실행':
      return {
        ...state,
        animationClass: 'run-animation',
      }
  }
}

// createStore(reducer, initialState) → store { getState, dispatch, subscribe }
const store = createStore(storeReducer, initialState)

// 스토어(store) 내보내기
export { store }
