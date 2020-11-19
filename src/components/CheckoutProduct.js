import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/shopping/shopActions'
import './CheckoutProduct.css'

export default function CheckoutProduct({ id, title, src, price }) {

    const dispatch = useDispatch()

    const removeFromBasket = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={src} alt={title} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>R </small>
                    <strong>{parseFloat(price).toFixed(2)}</strong>
                </p>
                <button onClick={() => removeFromBasket(id)}>Remove from Basket</button>
            </div>
        </div>
    )
}
