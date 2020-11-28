import React from 'react'
import './ShopComp.css'
import { Link } from 'react-router-dom'
import { fetchProductID } from '../redux/shopify/shopifyActions'
import { useDispatch } from 'react-redux'
import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'benjamin-woollens.myshopify.com',
    storefrontAccessToken: '376eecf28db5113a0f99f4766adecef7'
});

export default function ShopComp(props) {

    const { id, title, src, price, comp } = props

    console.log("SHOP_COMP", props)

    const dispatch = useDispatch()

    const handleSubmit = () => {

        dispatch(fetchProductID({ id, title, src, price, comp }))


        // dispatch({
        //     type: shopTypes.ADD_TO_CART,
        //     payload: {
        //         id: id, title: title, src: src, price: price,
        //         comp: comp, color: color, width: width,
        //         recApp: recApp, reCare: reCare,
        //         proCode: proCode, country: country,
        //         filterValue: false
        //     }
        // })
    }


    return (
        <>
            <Link to={`/product/${id}`}>
                <div className='shopItem_container'>
                    <img src={src} alt="Product-Image" className="store__img" />
                    <button onClick={handleSubmit}>{title}</button>
                </div>
            </Link>
        </>
    )
}
