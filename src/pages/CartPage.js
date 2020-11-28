import React, { useEffect } from 'react'
import './CartPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from '../components/CheckoutProduct'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addItemToCart, checkout } from '../redux/shopify/shopifyActions'


export default function CartPage() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkout())
    }, [dispatch])


    const history = useHistory()

    const mapState = useSelector(state => state.shopState.cart)

    //const mapShopify = useSelector(state => state.shopifyState.products[1].products)

    const checkoutBtn = useSelector(state => state.shopifyState.checkoutInfo)
    // const { webUrl } = checkoutBtn

    // console.log(checkout)

    const filterState = mapState.filter(item => item.filterValue)

    const totalValue = filterState.reduce((amount, item) => parseFloat(item.price) + parseFloat(amount), 0)

    const handleCheckout = () => {
        dispatch(addItemToCart())
        // console.log('webUrl', webUrl)
    }

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
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                src={item.src}
                                price={item.price}
                                width={item.width}
                                comp={item.comp}
                            />
                        ))}
                    </div>

                    <div className='checkout__right'>
                        <div className='subtotal'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <p>subtotal ({filterState.length} items): <strong>{value}</strong></p>                                    </>
                                )}
                                decimalScale={2}
                                value={totalValue.toFixed(2)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'R '}
                            />
                            <button onClick={handleCheckout}>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
