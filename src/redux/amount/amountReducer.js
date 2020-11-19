import amountTypes from '../amount/amountTypes'

const initState = {
    amount: 0
}

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case shopTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }

}
