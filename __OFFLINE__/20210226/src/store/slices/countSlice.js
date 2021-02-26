// 초기 상태
const initState = {
  count: 301,
}

// 리듀서
export const countReducer = (state = initState, action) => {
  switch (action.type) {
    case increment.name:
      return {
        ...state,
        count: state.count + 1,
      }
    case decrement.name:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

// 액션 크리에이터
export const increment = () => ({
  // 액션 타입
  type: increment.name,
})
export const decrement = () => ({
  // 액션 타입
  type: decrement.name,
})
