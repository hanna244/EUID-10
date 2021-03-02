import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { newsReducer } from './slices/news'

const middlewares = [thunk, logger]

const rootRedcuer = combineReducers({
  news: newsReducer,
})

const store = createStore(rootRedcuer, composeWithDevTools(applyMiddleware(...middlewares)))

const StoreProvider = ({ ...props }) => <Provider store={store} {...props} />

export { StoreProvider }
