import amountTypes from '../amount/amountTypes'
import shopTypes from '../shopping/shopTypes'

export const updateAmount = (amount) => {
    return {
        type: amountTypes.UPDATE_PRICE,
        payload: amount
    }
}