import React, { useState } from 'react'
import './ProductView.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import shopTypes from '../redux/shopping/shopTypes';
import { updateAmount } from '../redux/amount/amountAction';

export default function ProductView({ id, title, src, price, comp, color, width, country, recApp, reCare, proCode }) {

    const mapState = useSelector(state => state.shopState.cart)

    const history = useHistory()

    const handleClick = () => {
        history.goBack()
    }

    const dispatch = useDispatch()

    mapState.map(item => {
        id = item.id
        src = item.src
        title = item.title
        price = item.price
        comp = item.comp
        color = item.color
        width = item.width
        recApp = item.recApp
        reCare = item.reCare
        proCode = item.proCode
        country = item.country
    })

    const [cost, setCost] = useState(price)
    function handlePrice(e) {
        setCost(e.target.value * price)
    }

    const handleCart = () => {

        dispatch(updateAmount(cost))

        dispatch({
            type: shopTypes.ADD_TO_CART,
            payload: {
                id: id, title: title, src: src, price: cost,
                comp: comp, color: color, width: width,
                recApp: recApp, reCare: reCare,
                proCode: proCode, country: country,
                filterValue: true
            }
        })
    }

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
                    <h2>{title}</h2>
                    <p><span>Composition:</span>{comp}</p>
                    <p><span>Colour:</span> {color}</p>
                    <p><span>Width:</span> {width}</p>
                    <p><span>Country:</span> {country}</p>
                    <p><span>Recommended Application:</span> {recApp}</p>
                    <p><span>Recommended Care:</span> {reCare}</p>
                    <p><span>Product Code:</span> {proCode}</p>
                    <div>
                        <p><span>Material Length:</span></p>
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
