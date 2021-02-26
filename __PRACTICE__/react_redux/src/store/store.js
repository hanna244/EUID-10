import { createStore } from 'redux'
import { logoAnimationReducer } from './slices/logoAnimationReducer'

const store = createStore(logoAnimationReducer)

export default store
