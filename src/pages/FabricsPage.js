import React from 'react'
import './FabricsPage.css'
import fabric from '../assets/fabrics_banner.jpg'

export default function FabricsPage() {
    return (
        <div className='fabrics__container'>
            <div className="fabrics__hero">
                <img src={fabric} alt='fabrics' className='fabrics__img' />
            </div>
            <div className="fabrics__body">
                <h2>OUR FABRICS</h2>
                <div className="fabrics__copy">
                    <p>Benjamin Woollens has close connections with suppliers in Europe. Sourcing the highest quality fabrics from the UK, Italy, Spain, Germany and France. Our focus is on bringing the best natural fibre fabrics from the world’s top fabric houses to South Africa.</p>
                    <p>We stock a diversity of fabrics ranging from pure wool suiting to silks, cashmeres to Irish linen, Egyptian cotton shirting to denims. We also stock top quality jacquard linings and tailors trimmings.</p>
                </div>
            </div>
        </div>
    )
}
