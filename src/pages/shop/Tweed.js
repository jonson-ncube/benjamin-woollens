import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'

export default function Tweed() {

    // const mapState = useSelector(state => state.shopState.tweed)
    const mapState = useSelector(state => state.shopifyState.products[12].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS TWEED</h2>
                <div className="bespoke__copy">
                    <p>The ideal fabric for a chilly winters day. Benjamin Woollens stocks a wide variety of contemporary and vintage woollen tweeds imported from Europe.</p>
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
