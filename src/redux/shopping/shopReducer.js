import { ADD_TO_CART, ADJUST_QTY, REMOVE_FROM_CART, LOAD_CURRENT_ITEM } from './shopTypes'

const initialState = {
    product: [], // {id, tittle, desc, price, img}
    cart: [],    //{id, title, desc, price, img, qty}
    currentItem: null
}

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {}
        case REMOVE_FROM_CART:
            return {}
        case ADJUST_QTY:
            return {}
        case LOAD_CURRENT_ITEM:
            return {}
        default:
            return initialState;
    }
}