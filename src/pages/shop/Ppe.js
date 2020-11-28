import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'
import banner from '../../assets/images/shop_banner_03.jpg'
import './Ppe.css'

export default function Ppe() {

    // const mapState = useSelector(state => state.shopState.ppe)
    const mapState = useSelector(state => state.shopifyState.products[15].products)


    return (
        <>
            <div className='mask__container'>
                {/* <h2>FACE MASKS</h2> */}
                <div className="bespoke__copy">
                    <div className="shop__banner">
                        <img src={banner} alt="Shop-Banner" className="shop__image" />
                    </div>
                </div>
            </div>
            <div className="bespoke__body">
                {
                    mapState.map(item => (
                        <ShopComp
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            src={item.images[0].src}
                            price={item.variants[0].price}
                            comp={item.description}
                        />
                    ))
                }
            </div>
        </>
    )
}
