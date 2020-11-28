import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'

export default function Knit() {

    // const mapState = useSelector(state => state.shopState.knit)
    const mapState = useSelector(state => state.shopifyState.products[8].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS KNIT</h2>
                <div className="bespoke__copy">
                    <p>Benjamin Woollens stocks high quality plain and printed knits imported from Europe. Our knits come in a variety of qualities including cotton, viscose and wool.</p>
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
