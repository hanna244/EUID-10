// redux에서 createStore 모듈 추출
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logoAnimationReducer } from './slices/logoAnimationSlice'
import { countReducer } from './slices/countSlice'
import { peopleReducer } from './slices/peopleSlice'

// 다수의 리듀서를 하나의 리듀서 함수로 병합한다.
const rootReducer = combineReducers({
  logoAnim: logoAnimationReducer,
  counter: countReducer,
  people: peopleReducer,
})

// 스토어를 생성할 때 첫번째 인자는 리듀서 함수를 전달 받아야 한다.
// 단, 리듀서가 2개 이상인 경우 리듀서를 병합하는 리듀서 함수가 필요하다.
export const store = createStore(rootReducer, composeWithDevTools())
