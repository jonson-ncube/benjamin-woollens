import shopTypes from './shopTypes'
// import Client from 'shopify-buy';


// // Initializing a client to return content in the store's primary language
// const client = Client.buildClient({
//     domain: 'benjamin-woollens.myshopify.com',
//     storefrontAccessToken: '376eecf28db5113a0f99f4766adecef7'
// });

// // Fetch all products in your shop
// client.product.fetchAll().then((products) => {
//     // Do something with the products
//     console.log(products);
// });

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