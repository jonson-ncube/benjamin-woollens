import shopTypes from './shopTypes'

export const addToCart = (id) => {
    return {
        type: shopTypes.ADD_TO_CART,
        payload: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: shopTypes.REMOVE_FROM_CART,
        payload: id
    }
}

