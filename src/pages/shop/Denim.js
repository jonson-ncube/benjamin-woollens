import React from 'react'

//store images
import i1 from '../../assets/store/denim/1.jpg'
import i2 from '../../assets/store/denim/2.jpg'
import i3 from '../../assets/store/denim/3.jpg'
import i4 from '../../assets/store/denim/4.jpg'
import i5 from '../../assets/store/denim/5.jpg'
import i6 from '../../assets/store/denim/6.jpg'
import i7 from '../../assets/store/denim/7.jpg'
import i8 from '../../assets/store/denim/8.jpg'
import i9 from '../../assets/store/denim/9.jpg'
import ShopComp from '../../components/ShopComp'

export default function Denim() {
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
                <ShopComp src={i1} title='Imperial Blue Denim' />
                <ShopComp src={i2} title='Steel Blue Stretch Denim' />
                <ShopComp src={i3} title='Stretch Denim' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i4} title='Stretch Denim' />
                <ShopComp src={i5} title='Khaki Denim' />
                <ShopComp src={i6} title='Embroidered Stretch Denim' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i7} title='Stretch Denim with Silver Adornment' />
                <ShopComp src={i8} title='Embroidered Stretch Denim' />
                <ShopComp src={i9} title='Camo Inspired Stretch Denim' />
            </div>
        </>
    )
}
