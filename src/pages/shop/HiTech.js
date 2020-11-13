import React from 'react'

//store images
import i1 from '../../assets/store/hitech/1.jpg'
import i2 from '../../assets/store/hitech/2.jpg'
import i3 from '../../assets/store/hitech/3.jpg'
import ShopComp from '../../components/ShopComp'

export default function HiTech() {
    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS HI-TECH</h2>
                <div className="bespoke__copy">
                    <p>High-tech fashion uses advances in science and technology to design and produce fashion products. Hi-tech and performance fabrics are becoming increasingly popular with fashion designers around the world. These include waterproof, laser cut, reflective and high performance fabrics.</p>
                    <p><strong>Please note prices specified are per meter and exclude VAT</strong></p>
                </div>
            </div>
            <div className="bespoke__body">
                <ShopComp src={i1} title='Mock Crocodile Imitation Leather' />
                <ShopComp src={i2} title='Quilted Embroidered Two-Tone Padded Fabric' />
                <ShopComp src={i3} title='Reversible Quilted Padded Fabric' />
            </div>
        </>
    )
}
