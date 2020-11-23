import { combineReducers } from 'redux'
import { shopReducer } from './shopping/shopReducer'
import { amountReducer } from './amount/amountReducer'
import { userReducer } from './user/userReducer'

export const reducer = combineReducers({
    shopState: shopReducer,
    amountState: amountReducer,
    userState: userReducer,
})