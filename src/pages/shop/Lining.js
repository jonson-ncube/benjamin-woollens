import React from 'react'

//store images
import i1 from '../../assets/store/lining/1.jpg'
import i2 from '../../assets/store/lining/2.jpg'
import i3 from '../../assets/store/lining/3.jpg'
import i4 from '../../assets/store/lining/4.jpg'
import i5 from '../../assets/store/lining/5.jpg'
import i6 from '../../assets/store/lining/6.jpg'
import i7 from '../../assets/store/lining/7.jpg'
import i8 from '../../assets/store/lining/8.jpg'
import i9 from '../../assets/store/lining/9.jpg'
import i10 from '../../assets/store/lining/10.jpg'
import i11 from '../../assets/store/lining/11.jpg'
import i12 from '../../assets/store/lining/12.png'
import i13 from '../../assets/store/lining/13.jpg'
import i14 from '../../assets/store/lining/14.jpg'
import i15 from '../../assets/store/lining/15.jpg'
import i16 from '../../assets/store/lining/16.jpg'
import i17 from '../../assets/store/lining/17.jpg'
import ShopComp from '../../components/ShopComp'


export default function Lining() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS LINING</h2>
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
