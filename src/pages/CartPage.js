import React from 'react'
import './CartPage.css'
import { getBasketTotal } from '../redux/shopping/shopReducer'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'

export default function CartPage() {

    const mapState = useSelector(state => state.shopState.cart)

    return (
        <div className='cart__container'>
            {/* <h1>Your Shopping Cart</h1> */}

            <div className='checkout__left'>
                <h2 className='checkout__title'>
                    Your Shopping Cart
                </h2>
            </div>
            <div className="cart__over">

                <div className="cart__cover">
                    {mapState.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            src={item.src}
                            price={item.price}
                        />
                    ))}
                </div>

                <div className='checkout__right'>
                    <div className='subtotal'>
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <p>
                                        subtotal ({mapState.length} items): <strong>{value}</strong>
                                    </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(mapState)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'R'}
                        />
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
