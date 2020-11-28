import React from 'react'
import ShopComp from '../../components/ShopComp'
import './Bespoke.css'
import { useSelector } from 'react-redux'

export default function Bespoke() {

    const mapState = useSelector(state => state.shopifyState.products[1].products)
    // console.log('mapState', mapState)

    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS BESPOKE</h2>
                <div className="bespoke__copy">
                    <p>Every man or woman needs at least one suit in his or her wardrobe.For the office or special occasion, Benjamin Woollens offers a fantastic range of high quality <span>super 100’s</span> wool and wool-blends.</p>
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
                        // color={item.color}
                        // width={item.width}
                        // recApp={item.recApp}
                        // reCare={item.reCare}
                        // proCode={item.proCode}
                        // country={item.country}
                        />
                    ))
                }
            </div>
        </>
    )
}
