import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

export default function configure(initialState) {
  return createStore(rootReducer, initialState)
}
