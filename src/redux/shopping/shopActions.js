import { ADD_TO_CART, ADJUST_QTY, REMOVE_FROM_CART, LOAD_CURRENT_ITEM } from './shopTypes'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id
        }
    }
}

export const adjustQty = (id, value) => {
    return {
        type: ADJUST_QTY,
        payload: {
            id,
            value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: {
            item
        }
    }
}