import React from 'react'
import ShopComp from '../../components/ShopComp'

//store images
import i1 from '../../assets/store/brocade/1.jpg'
import i2 from '../../assets/store/brocade/2.jpg'
import i3 from '../../assets/store/brocade/3.jpg'
import i4 from '../../assets/store/brocade/4.jpg'
import i5 from '../../assets/store/brocade/5.jpg'
import i6 from '../../assets/store/brocade/6.jpg'
import i7 from '../../assets/store/brocade/7.jpg'
import i8 from '../../assets/store/brocade/8.jpg'
import i9 from '../../assets/store/brocade/9.jpg'
import i10 from '../../assets/store/brocade/10.jpg'
import i11 from '../../assets/store/brocade/11.jpg'
import i12 from '../../assets/store/brocade/12.jpg'
import i13 from '../../assets/store/brocade/13.jpg'
import i14 from '../../assets/store/brocade/14.jpg'

export default function Brocade() {
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
                <ShopComp src={i1} title='Emanuel Ungaro Floral Brocade' />
                <ShopComp src={i2} title='Baby Pink Brocade with Lace Appliqué' />
                <ShopComp src={i3} title='Emanuel Ungaro 3D Rose Gold Brocade' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i4} title='Reversible Retro Brocade' />
                <ShopComp src={i5} title='Abstract Metallic Rose Brocade' />
                <ShopComp src={i6} title='Filigree Swirl and Paisley Brocade' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i7} title='Floral Jacquard' />
                <ShopComp src={i8} title='Floral Jacquard' />
                <ShopComp src={i9} title='Spring Green and Platinum Brocade' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i10} title='Black and Silver Lurex Heart Brocade' />
                <ShopComp src={i11} title='Silver Diamond Brocade' />
                <ShopComp src={i12} title='Gold and Cream Jacquard Brocade' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i13} title='Abstract Floral Brocade' />
                <ShopComp src={i14} title='Taupe Metallic Floral Brocade' />
            </div>
        </>
    )
}
