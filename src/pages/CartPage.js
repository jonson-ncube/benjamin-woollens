import React from 'react'
import './CartPage.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function CartPage() {

    const mapState = useSelector(state => state.shopState.cart)

    const filterState = mapState.filter(item => item.filterValue)

    const totalValue = filterState.reduce((amount, item) => parseFloat(item.price) + parseFloat(amount), 0)

    if (filterState.length === 0) {
        return (
            <div className="empty__cart">
                <h2>Your shopping cart is empty</h2>
                <div className='empty__icon'>
                    <AddShoppingCartIcon fontSize='large' />
                </div>
            </div>
        )
    } else {

        return (
            <div className='cart__container'>
                <div className='checkout__left'>
                    <h2 className='checkout__title'>
                        Your Shopping Cart
                </h2>
                </div>
                <div className="cart__over">

                    <div className="cart__cover">
                        {filterState.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                src={item.src}
                                price={item.price}
                                width={item.width}
                            />
                        ))}
                    </div>

                    <div className='checkout__right'>
                        <div className='subtotal'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <p>
                                            subtotal ({filterState.length} items): <strong>{value}</strong>
                                        </p>
                                    </>
                                )}
                                decimalScale={2}
                                value={totalValue.toFixed(2)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'R '}
                            />
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
