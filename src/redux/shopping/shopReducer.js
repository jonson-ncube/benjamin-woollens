import shopTypes from './shopTypes'
import {
    bespokeData, brocadeData, coatingData, cottonData,
    hitechData, georgetteData, denimData, knitData, linenData,
    liningData, shirtingData, silkData, velvetData, ppeData,
    tweedData, trimmingData
} from '../../data/collectionData'

const initialState = {
    product: bespokeData,
    brocade: brocadeData,
    coating: coatingData,
    cotton: cottonData,
    hitech: hitechData,
    georgette: georgetteData,
    denim: denimData,
    knit: knitData,
    linen: linenData,
    lining: liningData,
    shirting: shirtingData,
    silk: silkData,
    velvet: velvetData,
    ppe: ppeData,
    tweed: tweedData,
    trim: trimmingData,
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