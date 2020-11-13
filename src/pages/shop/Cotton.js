import React from 'react'

//store images
import i1 from '../../assets/store/cotton/1.jpg'
import i2 from '../../assets/store/cotton/2.jpeg'
import i3 from '../../assets/store/cotton/3.jpg'
import i4 from '../../assets/store/cotton/4.jpeg'
import i5 from '../../assets/store/cotton/5.jpeg'
import i6 from '../../assets/store/cotton/6.jpeg'
import i7 from '../../assets/store/cotton/7.jpeg'
import i8 from '../../assets/store/cotton/8.jpeg'
import i9 from '../../assets/store/cotton/9.jpeg'
import i10 from '../../assets/store/cotton/10.jpg'
import i11 from '../../assets/store/cotton/11.jpeg'
import i12 from '../../assets/store/cotton/12.jpeg'
import i13 from '../../assets/store/cotton/13.jpeg'
import i14 from '../../assets/store/cotton/14.jpeg'
import i15 from '../../assets/store/cotton/15.jpeg'
import i16 from '../../assets/store/cotton/16.jpeg'
import i17 from '../../assets/store/cotton/17.jpeg'
import i18 from '../../assets/store/cotton/18.jpeg'
import i19 from '../../assets/store/cotton/19.jpeg'
import i20 from '../../assets/store/cotton/20.jpg'
import i21 from '../../assets/store/cotton/21.jpg'
import i22 from '../../assets/store/cotton/22.jpg'
import i23 from '../../assets/store/cotton/23.jpg'
import i24 from '../../assets/store/cotton/24.jpg'
import i25 from '../../assets/store/cotton/25.jpg'
import i26 from '../../assets/store/cotton/26.jpg'
import i27 from '../../assets/store/cotton/27.jpg'
import i28 from '../../assets/store/cotton/28.jpg'
import i29 from '../../assets/store/cotton/29.jpg'
import i30 from '../../assets/store/cotton/30.jpg'
import i31 from '../../assets/store/cotton/31.jpg'
import i32 from '../../assets/store/cotton/32.jpg'
import i33 from '../../assets/store/cotton/33.jpg'
import i34 from '../../assets/store/cotton/34.jpg'
import i35 from '../../assets/store/cotton/35.jpg'
import ShopComp from '../../components/ShopComp'

export default function Cotton() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS COTTON</h2>
                <div className="bespoke__copy">
                    <p>Benjamin Woollens stocks a wide range of high-end cottons. This includes 100% Egyptian cotton shirting, cotton prints for summer dresses, jackets and cotton knits for casual wear.</p>
                    <p><strong>Please note prices specified are per meter and exclude VAT</strong></p>
                </div>
            </div>
            <div className="bespoke__body">
                <ShopComp src={i1} title='Abstract Floral Print Cotton Stretch' />
                <ShopComp src={i2} title='Faberge Eggs Printed Cotton Stretch' />
                <ShopComp src={i3} title='Paint Splash Print Cotton Stretch' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i4} title='Peacock Feather Print Cotton Stretch' />
                <ShopComp src={i5} title='Floral Water Colours Cotton Print' />
                <ShopComp src={i6} title='Paint Slash Print Cotton Stretch' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i7} title='Flying Crane Printed Cotton Stretch' />
                <ShopComp src={i8} title='Sophisticated Lady Cotton Print' />
                <ShopComp src={i9} title='Forest Animal Print Cotton Stretch' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i10} title='Abstract Floral Print Cotton Stretch' />
                <ShopComp src={i11} title='Pastel Moth Print Cotton Stretch' />
                <ShopComp src={i12} title='Multi-coloured Pendant Print Cotton Stretch' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i13} title='Abstract Face Portraits Cotton Stretch' />
                <ShopComp src={i14} title='Dragonfly Print Cotton Stretch' />
                <ShopComp src={i15} title='Duck Feather Cotton Print' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i16} title='Abstract Facial Expressions Print Cotton Stretch' />
                <ShopComp src={i17} title='Many Faces Cotton Print' />
                <ShopComp src={i18} title='Multi-coloured Animal Print Cotton Stretch' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i19} title='Abstract Swirls Print Cotton Stretch' />
                <ShopComp src={i20} title='Retro Floral Print' />
                <ShopComp src={i21} title='100% Lightweight Floral Cotton' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i22} title='Multi-Coloured Animal Print' />
                <ShopComp src={i23} title='Floral Stretch Denim' />
                <ShopComp src={i24} title='100% Cotton Pique' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i25} title='Nautical Dreamscape' />
                <ShopComp src={i26} title='Floral Cotton Pique' />
                <ShopComp src={i27} title='Mandala Printed Stretch Cotton' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i28} title='Mandala Printed Stretch Cotton' />
                <ShopComp src={i29} title='Cotton Stretch Snakeskin Print' />
                <ShopComp src={i30} title='Oriental Peacock Motif' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i31} title='Floral Cotton Print' />
                <ShopComp src={i32} title='100% Gingham Check Cotton' />
                <ShopComp src={i33} title='Multi-Coloured Check Cotton' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i34} title='Cotton Stretch Corduroy' />
                <ShopComp src={i35} title='Carnet Corduroy Cotton' />
            </div>
        </>
    )
}
