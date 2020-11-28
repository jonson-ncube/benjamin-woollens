import shopifyTypes from './shopifyTypes'
import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'benjamin-woollens.myshopify.com',
    storefrontAccessToken: '376eecf28db5113a0f99f4766adecef7'
});


export const fetchAllProducts = () => {

    return async (dispatch, getState) => {
        try {
            await client.collection?.fetchAllWithProducts({ productsFirst: 100 }).then((collections) => {
                dispatch({
                    type: shopifyTypes.FETCH_ALL_PRODUCTS,
                    payload: collections
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const checkout = () => {

    return async (dispatch, getState) => {

        try {
            await client.checkout.create().then((checkout) => {
                dispatch({
                    type: shopifyTypes.CREATE_CHECKOUT,
                    payload: checkout
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const fetchProductID = (productID) => {

    // return {
    //     type: shopifyTypes.FETCH_PRODUCT_ID,
    //     payload: productID
    // }

    return async (dispatch, getState) => {

        const productId = productID.id

        try {

            await client.product.fetch(productId).then((productID) => {
                // Do something with the product
                console.log("THE ACTION PRODUCT", productID);
                dispatch({
                    type: shopifyTypes.FETCH_PRODUCT_ID,
                    payload: productID
                })
            })

        } catch (error) {

            console.log(error)

        }
    }

}

export const addItemToCart = (checkoutId, lineItemsToAdd) => {

    return async (dispatch) => {
        const response = await client.checkout.addLineItems(
            checkoutId,
            lineItemsToAdd
        )
        dispatch({
            type: shopifyTypes.CREATE_CHECKOUT,
            payload: response,
        })
        console.log(response)
        return response
    }

    // const lineItemsToAdd = [
    //     {
    //         variantId,
    //         quantity,
    //     }
    // ]
    // return async (dispatch, getState) => {

    //     const checkoutInfo = getState()
    //     // console.log("CHECKOUT INFO", checkoutInfo.shopifyState.checkoutInfo.id)

    //     try {
    //         await client.checkout.addLineItems(checkoutInfo.shopifyState.checkoutInfo.id, lineItemsToAdd).then((checkout) => {

    //             // console.log("CHECK OUT LINE ITEMS", checkout.lineItemsToAdd); // Array with one additional line item
    //             dispatch({
    //                 type: shopifyTypes.CREATE_CHECKOUT,
    //                 payload: checkout
    //             })
    //         });
    //     } catch (error) {

    //         console.log(error)

    //     }
    // }

}

