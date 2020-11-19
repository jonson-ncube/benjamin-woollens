import amountTypes from '../amount/amountTypes'

const initState = {
    amount: 0
}

export const amountReducer = (state = initState, action) => {
    switch (action.type) {
        case amountTypes.UPDATE_PRICE:
            return {
                amount: action.payload
            }
        default:
            return state
    }

}
