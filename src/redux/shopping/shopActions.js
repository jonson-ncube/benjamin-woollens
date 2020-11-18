import shopTypes from './shopTypes'

export const addToCart = (productName) => {

    return {
        type: shopTypes.ADD_TO_CART,
        payload: productName
    }
}

export const removeFromCart = (id) => {
    return {
        type: shopTypes.REMOVE_FROM_CART,
        payload: id
    }
}

export const loadProducts = (id) => {
    return {
        type: shopTypes.LOAD_PRODUCTS,
        payload: id
    }
}