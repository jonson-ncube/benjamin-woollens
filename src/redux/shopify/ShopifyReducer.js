import shopifyTypes from "./shopifyTypes"

const initState = {
    shopifyCart: [],
    products: [],
    product: {},
    checkoutInfo: [{
        // lineItems:[{id}]
    }]
}


export const shopifyReducer = (state = initState, action) => {

    switch (action.type) {
        case shopifyTypes.FETCH_PRODUCT_ID:

            console.log('REDUCER_FETCH_PRODUCT::', action.payload)
            return {
                product: action.payload
            }
        case shopifyTypes.FETCH_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case shopifyTypes.CREATE_CHECKOUT:
            return {
                ...state,
                checkoutInfo: action.payload
            }
        case shopifyTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                shopifyCart: action.payload
            }

        default:
            return state
    }
}