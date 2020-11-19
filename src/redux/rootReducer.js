import { combineReducers } from 'redux'
import { shopReducer } from './shopping/shopReducer'
import { amountReducer } from './amount/amountReducer'

export const reducer = combineReducers({
    shopState: shopReducer,
    amountState: amountReducer,
})