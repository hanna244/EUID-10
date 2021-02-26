import { createStore } from 'redux'

const initialState = {
  animationClass: '',
}

const reducer = (state, action) => {
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

const store = createStore(reducer, initialState)

export default store
