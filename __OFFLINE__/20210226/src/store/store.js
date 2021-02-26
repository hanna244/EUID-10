// redux에서 createStore 모듈 추출
import { createStore } from 'redux'
import { logoAnimationReducer } from './slices/logoAnimationSlice'

export const store = createStore(logoAnimationReducer)
