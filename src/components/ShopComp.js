import React from 'react'
import './ShopComp.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import shopTypes from '../redux/shopping/shopTypes'

export default function ShopComp({ id, title, src, price, comp, color, country, width, recApp, reCare, proCode }) {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch({
            type: shopTypes.LOAD_PRODUCTS,
            payload: {
                id: id, title: title, src: src, price: price,
                comp: comp, color: color, width: width,
                recApp: recApp, reCare: reCare,
                proCode: proCode, country: country
            }
        })
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
