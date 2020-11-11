import { combineReducers } from 'redux'
import { shopReducer } from './shopping/shopReducer'

export const reducer = combineReducers({
    shop: shopReducer,
})