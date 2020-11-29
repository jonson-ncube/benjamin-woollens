import shopTypes from './shopTypes'

const initialState = {
    cart: [],
    load: []
}

export const getBasketTotal = (cart) =>

    cart?.reduce((amount, item) => item.price + amount, 0);


export const shopReducer = (state = initialState, action) => {

    const newCart = state.cart.filter(item => item.id !== action.payload)

    switch (action.type) {
        case shopTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case shopTypes.REMOVE_FROM_CART:
            return {
                ...state, cart: newCart
            }

        case shopTypes.LOAD_PRODUCTS:
            return {
                ...state,
                load: [...state.load, action.payload]
            }

        default:
            return state;
    }
}