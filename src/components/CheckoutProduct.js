import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/shopping/shopActions'
import './CheckoutProduct.css'

export default function CheckoutProduct({ id, title, src, price, width, comp }) {

    const dispatch = useDispatch()

    const removeFromBasket = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={src} alt={title} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p><small>length: <strong>{comp} meter</strong></small></p>
                <small>width: <strong>{width}</strong></small>
                <p className='checkoutProduct__price'>
                    <strong>R </strong>
                    <b>{parseFloat(price).toFixed(2)}</b>
                </p>
                <button onClick={() => removeFromBasket(id)}>Remove from Basket</button>
            </div>
        </div>
    )
}
