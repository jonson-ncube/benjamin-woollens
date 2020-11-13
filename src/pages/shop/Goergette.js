import React from 'react'

//store images
import i1 from '../../assets/store/georgette/1.jpg'
import i2 from '../../assets/store/georgette/2.jpg'
import ShopComp from '../../components/ShopComp'

export default function Goergette() {
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
                <ShopComp src={i1} title='Jungle Fever' />
                <ShopComp src={i2} title='Floral Fantasy' />
            </div>
        </>
    )
}
