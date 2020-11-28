import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'

export default function Denim() {

    // const mapState = useSelector(state => state.shopState.denim)
    const mapState = useSelector(state => state.shopifyState.products[5].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS DENIM</h2>
                <div className="bespoke__copy">
                    <p>A fabric that never goes out of style. Denim is an essential wardrobe stable. Benjamin Woollens offers a lovely range of stretch and non-stretch imported denims.</p>
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
