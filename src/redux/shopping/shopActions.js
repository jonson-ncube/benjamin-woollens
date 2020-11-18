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

export const loadProducts = ({ id, title, src, price, comp, color, country, width, recApp, reCare, proCode }) => {
    return {
        type: shopTypes.LOAD_PRODUCTS,
        payload: {
            id: id, title: title, src: src, price: price,
            comp: comp, color: color, width: width,
            recApp: recApp, reCare: reCare,
            proCode: proCode, country: country
        }
    }
}