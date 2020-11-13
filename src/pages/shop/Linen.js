import React from 'react'

//store images
import i1 from '../../assets/store/linen/1.jpg'
import i2 from '../../assets/store/linen/2.jpg'
import i3 from '../../assets/store/linen/3.jpg'
import i4 from '../../assets/store/linen/4.jpg'
import i5 from '../../assets/store/linen/5.png'
import i6 from '../../assets/store/linen/6.jpeg'
import i7 from '../../assets/store/linen/7.jpg'
import i8 from '../../assets/store/linen/8.jpg'
import i9 from '../../assets/store/linen/9.jpg'
import i10 from '../../assets/store/linen/10.jpg'
import i11 from '../../assets/store/linen/11.jpg'
import ShopComp from '../../components/ShopComp'

export default function Linen() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS LINEN</h2>
                <div className="bespoke__copy">
                    <p><strong>Please note prices specified are per meter and exclude VAT</strong></p>
                </div>
            </div>
            <div className="bespoke__body">
                <ShopComp />
            </div>
        </>
    )
}
