import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'

export default function Goergette() {

    // const mapState = useSelector(state => state.shopState.georgette)
    const mapState = useSelector(state => state.shopifyState.products[6].products)


    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS GEORGETTE</h2>
                <div className="bespoke__copy">
                    <p>named after the 20th century french dressmaker Georgette De la plante, georgette garments were traditionally worn by nobility as they were expensive yet elegant. a sheer, lightweight crepe-like fabric, georgette is wideLy favoured for summer dresses and blouses. georgette is typically made from silk but it can also be made from synthetic fabrics such a viscose and rayon.</p>
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
