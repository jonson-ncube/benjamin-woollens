import amountTypes from '../amount/amountTypes'

const initState = {
    amount: 0,
    meterLength: 1
}

export const amountReducer = (state = initState, action) => {
    switch (action.type) {
        case amountTypes.UPDATE_PRICE:
            return {
                amount: action.payload
            }
        case amountTypes.METER_LENGTH:
            return {
                meterLength: action.payload
            }
        default:
            return state
    }

}
