import amountTypes from '../amount/amountTypes'
import shopTypes from '../shopping/shopTypes'

export const updateAmount = (cost) => {
    // console.log('actions amount', cost)
    return {
        type: amountTypes.UPDATE_PRICE,
        payload: cost
    }
}