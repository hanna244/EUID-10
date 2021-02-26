const initialState = {
  count: 0,
}

export const countSlice = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER:
      return {
        ...state,
        count: state.count + action.changeSize,
      }
    case DECREASE_NUMBER:
      return {
        ...state,
        count: state.count - action.changeSize,
      }
    default:
      return state
  }
}

export const INCREASE_NUMBER = '증가'
export const DECREASE_NUMBER = '감소'

export const increaseNumber = (changeSize) => {
  return { type: INCREASE_NUMBER, changeSize }
}

export const decreaseNumber = (changeSize) => {
  return { type: DECREASE_NUMBER, changeSize }
}
