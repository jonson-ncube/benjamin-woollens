import { createStore } from 'redux'
import { reducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(reducer, composeWithDevTools())

