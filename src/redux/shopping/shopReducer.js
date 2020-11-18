import shopTypes from './shopTypes'
import bespokeData from '../../data/bespokeData'

const initialState = {
    product: bespokeData,
    cart: [],
}

export const getBasketTotal = (cart) =>

    cart?.reduce((amount, item) => item.price + amount, 0);


export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case shopTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case shopTypes.REMOVE_FROM_CART:
            const index = state.cart.findIndex(
                cartItem => cartItem.id === action.id
            )

            let newCart = [...state.cart]
            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                console.warn(`Can's remove product (id:${action.id}) as its not in basket!`)
            }
            return {
                ...state, cart: newCart
            }

        case shopTypes.LOAD_PRODUCTS:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        default:
            return state;
    }
}