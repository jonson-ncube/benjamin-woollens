import React from 'react'
import ShopComp from '../../components/ShopComp'
import './Bespoke.css'

//store images
import i1 from '../../assets/store/bespoke/1.jpg'
import i2 from '../../assets/store/bespoke/2.jpg'
import i3 from '../../assets/store/bespoke/3.jpg'
import i4 from '../../assets/store/bespoke/4.jpg'
import i5 from '../../assets/store/bespoke/5.jpg'
import i6 from '../../assets/store/bespoke/6.jpg'
import i7 from '../../assets/store/bespoke/7.jpg'
import i8 from '../../assets/store/bespoke/8.jpg'
import i9 from '../../assets/store/bespoke/9.jpg'
import i10 from '../../assets/store/bespoke/10.jpg'
import i11 from '../../assets/store/bespoke/11.jpg'
import i12 from '../../assets/store/bespoke/12.jpg'
import i13 from '../../assets/store/bespoke/13.jpg'
import i14 from '../../assets/store/bespoke/14.jpg'
import i15 from '../../assets/store/bespoke/15.jpg'
import i16 from '../../assets/store/bespoke/16.jpg'
import i17 from '../../assets/store/bespoke/17.jpg'
import i18 from '../../assets/store/bespoke/18.jpg'
import i19 from '../../assets/store/bespoke/19.jpg'
import i20 from '../../assets/store/bespoke/20.png'
import i21 from '../../assets/store/bespoke/21.jpg'
import i22 from '../../assets/store/bespoke/22.jpg'
import i23 from '../../assets/store/bespoke/23.jpg'
import i24 from '../../assets/store/bespoke/24.jpg'
import i25 from '../../assets/store/bespoke/25.jpg'
import i26 from '../../assets/store/bespoke/26.jpg'
import i27 from '../../assets/store/bespoke/27.jpg'
import i28 from '../../assets/store/bespoke/28.jpg'
import i29 from '../../assets/store/bespoke/29.jpg'
import i30 from '../../assets/store/bespoke/30.jpg'
import i31 from '../../assets/store/bespoke/31.jpg'

export default function Bespoke() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS BESPOKE</h2>
                <div className="bespoke__copy">
                    <p>Every man or woman needs at least one suit in his or her wardrobe.For the office or special occasion, Benjamin Woollens offers a fantastic range of high quality <span>super 100’s</span> wool and wool-blends.</p>
                    <p><strong>Please note prices specified are per meter and exclude VAT</strong></p>
                </div>
            </div>
            <div className="bespoke__body">
                <ShopComp title='140s Light brown and Electric Blue Check' src={i1} />
                <ShopComp title='Super 140s Slate Blue and Scarlet Check' src={i2} />
                <ShopComp title='Super 140s Taupe and Grey Check' src={i3} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Super 140s Baby Blue Prince of Wales Check' src={i4} />
                <ShopComp title='Super 140s Pink and Taupe Prince of Wales Check' src={i5} />
                <ShopComp title='Super 140s Teal Grey Prince of Wales Check' src={i6} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Vitale Barberis Super 120s Wool' src={i7} />
                <ShopComp title="Super 150's Wool" src={i8} />
                <ShopComp title='Dormeuil Wool and Silk' src={i9} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Dormeuil Dorsilk Wool & Silk' src={i10} />
                <ShopComp title='Dormeuil Dorsilk Wool & Silk' src={i11} />
                <ShopComp title='Super 120s Australian Merino Wool' src={i12} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Super 110s Wool Block Check' src={i13} />
                <ShopComp title='Super 150s Wool' src={i14} />
                <ShopComp title='Wool and Cashmere Rich' src={i15} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Guabello Super 130s Wool' src={i16} />
                <ShopComp title='Super 130s Wool' src={i17} />
                <ShopComp title='Vitale Barberis Canonica Super 120s Wool' src={i18} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Huddersfield Fine Worsteds Super 110s Wool' src={i19} />
                <ShopComp title='Emanuel Ungaro Heavy-Weight Wool' src={i20} />
                <ShopComp title='Vitale Barberis Canonica Wool' src={i21} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Vitale Barberis Super 110s Wool' src={i22} />
                <ShopComp title='Wine Coloured Super 110s Wool' src={i23} />
                <ShopComp title='Pastel Brown Super 110s Wool' src={i24} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Russet-Coloured Super 110s Wool' src={i25} />
                <ShopComp title='Valentino Super 130s Wool' src={i26} />
                <ShopComp title='Valentino Super 130s Wool' src={i27} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Dark Brown Super 140s Wool Cashmere Pinstripe' src={i28} />
                <ShopComp title='Charcoal Pinstripe Huddersfield Fine Worsteds Super 120s Wool' src={i29} />
                <ShopComp title='Guabello Super 120s Wool' src={i30} />
            </div>
            <div className="bespoke__body">
                <ShopComp title='Super 120s Australian Merino Wool' src={i31} />
            </div>
        </>
    )
}
