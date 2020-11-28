import React, { useState } from 'react'
import './ProductView.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { meterLength, updateAmount } from '../redux/amount/amountAction';
import { addItemToCart } from '../redux/shopify/shopifyActions';

export default function ProductView() {

    const shopifyState = useSelector(state => state.shopifyState.product)

    console.log("PRODUCT_VIEW", shopifyState)

    const price = shopifyState.variants[0].price
    // const price = shopifyState.price

    const src = shopifyState.images[0].src
    // const src = shopifyState

    const history = useHistory()

    const handleClick = () => {
        history.goBack()
    }

    const dispatch = useDispatch()

    const [meter, setMeter] = useState(1)

    const [cost, setCost] = useState(price)

    function handlePrice(e) {
        setCost(e.target.value * price)
        setMeter(e.target.value)
    }


    const handleCart = () => {

        dispatch(updateAmount(cost))
        dispatch(meterLength(meter))
        dispatch(addItemToCart())
    }

    if ('0' === undefined) {
        return <p>Loading...</p>
    } else {
        return (
            <div className='product__container'>
                <div className="product__header">
                    <ArrowBackIosIcon onClick={handleClick} />
                    <button onClick={handleClick}>Back</button>
                </div>
                <div className="product__body">
                    <div className="product__image">
                        <img src={src} alt="" className="product__pic" />
                    </div>
                    <div className="product__details">
                        <h2>{shopifyState.title}</h2>
                        {/* <p><span>Product Code:</span> x</p> */}
                        {/* <p><span>Composition: </span>{shopifyState.comp}</p> */}
                        {/* <p><span>Colour:</span> x</p>
                        <p><span>Width:</span> x</p>
                        <p><span>Country:</span> x</p>
                        <p><span>Recommended Application:</span> x</p>
                        <p><span>Recommended Care:</span> x</p> */}
                        <div>
                            {/* <p><span>Material Length:</span></p> */}
                            <div className="quantity">
                                <input onChange={handlePrice} type="text" className="product__qty" placeholder='1' />
                                <p>Number of meters</p>
                            </div>
                            <h2>R {parseFloat(cost).toFixed(2)}</h2>
                            <div className="product__button">
                                <button onClick={() => handleCart()} className='shopCart'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}