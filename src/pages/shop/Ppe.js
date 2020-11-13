import React from 'react'

//store images
import i1 from '../../assets/store/ppe/1.jpg'
import i2 from '../../assets/store/ppe/2.jpg'
import i3 from '../../assets/store/ppe/3.jpg'
import i4 from '../../assets/store/ppe/4.jpg'
import i5 from '../../assets/store/ppe/5.jpg'
import i6 from '../../assets/store/ppe/6.jpg'
import i7 from '../../assets/store/ppe/7.jpg'
import i8 from '../../assets/store/ppe/8.jpg'
import i9 from '../../assets/store/ppe/9.jpg'
import i10 from '../../assets/store/ppe/10.jpg'
import i11 from '../../assets/store/ppe/11.jpg'
import i12 from '../../assets/store/ppe/12.jpg'
import i13 from '../../assets/store/ppe/13.jpg'
import i14 from '../../assets/store/ppe/14.jpg'
import i15 from '../../assets/store/ppe/15.jpg'
import ShopComp from '../../components/ShopComp'

export default function Ppe() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS PPE</h2>
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
