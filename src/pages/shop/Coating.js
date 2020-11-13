import React from 'react'
import './Coating.css'

//store images
import i1 from '../../assets/store/coating/1.jpg'
import i2 from '../../assets/store/coating/2.jpg'
import i3 from '../../assets/store/coating/3.jpg'
import i4 from '../../assets/store/coating/4.jpg'
import i5 from '../../assets/store/coating/5.jpg'
import i6 from '../../assets/store/coating/6.jpg'
import i7 from '../../assets/store/coating/7.jpg'
import ShopComp from '../../components/ShopComp'

export default function Coating() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS COATING</h2>
                <div className="bespoke__copy">
                    <p>Benjamin Woollens stock a wonderful range of high quality cashmere wool and pure cashmere coating fabrics. Ideal for a luxurious winter coat, jacket or shawl. </p>
                    <p><strong>Please note prices specified are per meter and exclude VAT</strong></p>
                </div>
            </div>
            <div className="bespoke__body">
                <ShopComp src={i1} title='Carnet Couture Wool Cashmere' />
                <ShopComp src={i2} title='Wool Rich' />
                <ShopComp src={i3} title='100% Cashmere' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i4} title='Loro Piana 100% Wool' />
                <ShopComp src={i5} title='100% Boiled Wool' />
                <ShopComp src={i6} title='Virgin Wool and Mohair' />
            </div>
            <div className="bespoke__body">
                <ShopComp src={i7} title='Pink and Pastel Blue Check Wool' />
            </div>
        </>
    )
}
