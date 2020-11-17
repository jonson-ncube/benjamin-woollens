import React, { useState } from 'react'
import './ProductView.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom'
import { addToCart } from '../redux/shopping/shopActions'
import { useDispatch } from 'react-redux';

export default function ProductView({ id, title, src, price, comp, color, wide, recApp, reCare, code }) {

    const [cost, setCost] = useState(price)

    const history = useHistory()

    console.log(src)

    const dispatch = useDispatch()

    const handleCart = (id) => {
        dispatch(addToCart(id))
    }

    const handleClick = () => {
        history.goBack()
    }

    const handlePrice = (e) => {
        setCost(e.target.value * 10)
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
                    <h2>Emanuel Ungaro Floral Brocade</h2>
                    <p><span>Composition:</span> Silk, Acetate and PL</p>
                    <p><span>Colour:</span> Daffodil and Ivory</p>
                    <p><span>Width:</span> 132 cm</p>
                    <p><span>Recommended Application:</span> Dresses, Jackets, Skirts and Waistcoats</p>
                    <p><span>Recommended Care:</span> Dry Clean</p>
                    <p><span>Product Code:</span> 17693</p>
                    <div>
                        <p><span>Quantity:</span></p>
                        <div className="quantity">
                            <input onChange={handlePrice} type="text" className="product__qty" placeholder='1' value={price} />
                            <p> Price per meter</p>
                        </div>
                        <h2>R {cost}</h2>
                        <div className="product__button">
                            <button onClick={handleCart} className='shopCart'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
