import React from 'react'
import './Payment.css'
import CurrencyFormat from 'react-currency-format'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import AddressForm from '../components/AddressForm'
import { updateInfo } from '../redux/user/userActions'


export default function Payment() {

    const history = useHistory()
    const dispatch = useDispatch()

    const mapState = useSelector(state => state.shopState.cart)

    const filterState = mapState.filter(item => item.filterValue)

    const totalValue = filterState.reduce((amount, item) => parseFloat(item.price) + parseFloat(amount), 0)

    const mapUser = useSelector(state => state.userState.userDetails)

    const handleBack = () => {
        dispatch(updateInfo([]))
    }


    const updateDetails = () => {

        if (mapUser.length === 0) {
            console.log('empty')
            return (
                <AddressForm />
            )

        } else if (mapUser === 'x') {
            console.log('= x')
            return (
                <div className='mapuser__collect'>
                    <p>Contact the store to collect your order</p>
                    <button className='mapuser__button' onClick={handleBack}>Edit</button>
                </div>
            )

        } else {
            console.log('not empty')
            return (
                <div className="mapuser__details">
                    <div className="mapuser__info">
                        <h3>Hello, {mapUser.name}</h3>
                    </div>
                    <p><span>email: </span>{mapUser.email}</p>
                    <p><span>cell: </span>{mapUser.contact}</p>
                    <p>{mapUser.street}</p>
                    <p>{mapUser.house}</p>
                    <p>{mapUser.suburb}</p>
                    <p>{mapUser.province}</p>
                    <p>{mapUser.postal}</p>
                    <button className='mapuser__button' onClick={handleBack}>Edit</button>
                </div>
            )
        }

    }



    return (
        <div className='payment__cover'>
            <div className='bespoke__container'>
                <h2>
                    Check out (
                    <Link to='/checkout'>{filterState?.length} items </Link>
                    )</h2>
            </div>
            {/* <div className="payment__container"> */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                    {
                        mapUser === 'x' ? '' : <p><small>Domestic delivery costs to major cities are <span>R184.00</span> including VAT.</small></p>
                    }

                </div>
                <div className="payment__address">
                    {updateDetails()}
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Order Items Review</h3>
                </div>
                <div className="payment__items">
                    {filterState.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            src={item.src}
                            price={item.price}
                            width={item.width}
                            comp={item.comp}
                        />
                    ))}
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Methord</h3>
                </div>
                <div className="payment__details">
                    <form>
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order total: {value}</h3>
                                        {/* <p>VAT incl. total: <strong>{value}</strong></p> */}
                                    </>
                                )}
                                decimalScale={2}
                                value={totalValue.toFixed(2)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'R '}
                            />

                        </div>
                    </form>
                </div>
            </div>

            {/* </div> */}
        </div>
    )
}
