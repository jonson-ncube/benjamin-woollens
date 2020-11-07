import React from 'react'
import './BrandIcon.css'

export default function BrandIcon({ src }) {
    return (
        <div className='brand__icon'>
            <img src={src} alt='Fashion-brands' className='brand__logo' />
        </div>
    )
}
