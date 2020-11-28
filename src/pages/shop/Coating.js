import React from 'react'
import './Coating.css'
import ShopComp from '../../components/ShopComp'
import { useSelector } from 'react-redux'


export default function Coating() {

    // const mapState = useSelector(state => state.shopState.coating)
    const mapState = useSelector(state => state.shopifyState.products[3].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS COATING</h2>
                <div className="bespoke__copy">
                    <p>Benjamin Woollens stock a wonderful range of high quality cashmere wool and pure cashmere coating fabrics. Ideal for a luxurious winter coat, jacket or shawl. </p>
                    <p><strong>Please note prices specified are per meter and exclude VAT</strong></p>
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
