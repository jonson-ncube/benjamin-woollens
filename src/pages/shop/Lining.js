import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'


export default function Lining() {

    // const mapState = useSelector(state => state.shopState.lining)
    const mapState = useSelector(state => state.shopifyState.products[10].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS LINING</h2>
                <div className="bespoke__copy">
                    <p>Benjamin Woollens stock a variety of plain and printed natural fibre linings (Acetate and Viscose ), which perfectly compliments our high quality natural fabrics.</p>
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
