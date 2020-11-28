import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'

export default function Cotton() {

    // const mapState = useSelector(state => state.shopState.cotton)
    const mapState = useSelector(state => state.shopifyState.products[16].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS COTTON</h2>
                <div className="bespoke__copy">
                    <p>Benjamin Woollens stocks a wide range of high-end cottons. This includes 100% Egyptian cotton shirting, cotton prints for summer dresses, jackets and cotton knits for casual wear.</p>
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
