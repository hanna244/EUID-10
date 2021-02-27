import { createStore } from 'redux'
import { logoAnimationSlice } from './slices/logoAnimationSlice'

import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(logoAnimationSlice, composeWithDevTools())

export default store
