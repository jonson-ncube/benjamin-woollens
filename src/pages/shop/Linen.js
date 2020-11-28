import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'

export default function Linen() {

    // const mapState = useSelector(state => state.shopState.linen)
    const mapState = useSelector(state => state.shopifyState.products[9].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS LINEN</h2>
                <div className="bespoke__copy">
                    <p>The perfect summer fabric, cool classy and elegant. Benjamin Woollens stocks a wide range of exceptional Irish, Spanish and Belgium linens for suits, dresses and shirts.</p>
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
