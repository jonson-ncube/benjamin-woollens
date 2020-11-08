import React from 'react'
import './HomeImage.css'

export default function HomeImage({ src, alt }) {
    return (
        <div className='home__container'>
            <div className="home__hero">
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}
