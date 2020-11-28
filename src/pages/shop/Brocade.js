import React from 'react'
import ShopComp from '../../components/ShopComp'
import { useSelector } from 'react-redux'

export default function Brocade() {

    // const mapState = useSelector(state => state.shopState.brocade)
    const mapState = useSelector(state => state.shopifyState.products[2].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS BROCADE</h2>
                <div className="bespoke__copy">
                    <p>Brocades are the ideal fabrics for special occasions such as weddings (Mother of the bride and Groom) and cocktail functions. Brocades are the preferred choice of fabric for couturiers worldwide.</p>
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
