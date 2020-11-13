import React from 'react'

import i1 from '../../assets/store/velvet/1.jpg'
import i2 from '../../assets/store/velvet/2.jpg'
import i3 from '../../assets/store/velvet/3.jpg'
import i4 from '../../assets/store/velvet/4.jpg'
import i5 from '../../assets/store/velvet/5.jpg'
import i6 from '../../assets/store/velvet/6.jpg'
import i7 from '../../assets/store/velvet/7.jpg'
import i8 from '../../assets/store/velvet/8.jpg'
import i9 from '../../assets/store/velvet/9.jpg'
import ShopComp from '../../components/ShopComp'

export default function Velvet() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS VELVET</h2>
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
