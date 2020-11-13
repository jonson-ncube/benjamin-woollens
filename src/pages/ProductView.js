import React from 'react'
import './ProductView.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function ProductView() {
    return (
        <div className='product__container'>
            <div className="product__header">
                <ArrowBackIosIcon />
                <p>Back</p>
            </div>
            <div className="product__body">
                <div className="product__image">
                    <img src="" alt="" className="product__pic" />
                </div>
                <div className="product__details">
                    <h2>Emanuel Ungaro Floral Brocade</h2>
                    <p><span>Composition :</span>Silk, Acetate and PL</p>
                    <p><span>Colour :</span>Daffodil and Ivory</p>
                    <p><span>Width :</span>132 cm</p>
                    <p><span>Recommended Application :</span>Dresses, Jackets, Skirts and Waistcoats</p>
                    <p><span>Recommended Care :</span>Dry Clean</p>
                    <p><span>Product Code :</span>17693</p>
                    <div>
                        <p><span>Quantity</span></p>
                        <input type="text" className="product__qty" placeholder='price per meter' />
                        <h2>R 995.00</h2>
                        <div className="product__button">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
