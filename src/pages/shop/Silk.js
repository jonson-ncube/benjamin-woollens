import React from 'react'

//store images
import i1 from '../../assets/store/silk/1.jpg'
import i2 from '../../assets/store/silk/2.jpg'
import i3 from '../../assets/store/silk/3.jpg'
import i4 from '../../assets/store/silk/4.jpg'
import i5 from '../../assets/store/silk/5.jpg'
import i6 from '../../assets/store/silk/6.jpg'
import i7 from '../../assets/store/silk/7.jpg'
import i8 from '../../assets/store/silk/8.jpg'
import i9 from '../../assets/store/silk/9.jpg'
import i10 from '../../assets/store/silk/10.jpg'
import i11 from '../../assets/store/silk/11.jpg'
import i12 from '../../assets/store/silk/12.jpg'
import i13 from '../../assets/store/silk/13.jpg'
import ShopComp from '../../components/ShopComp'

export default function Silk() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS SILK</h2>
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
