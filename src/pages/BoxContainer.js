import React from 'react'
import './BoxContainer.css'

export default function BoxContainer({ src, alt }) {
    return (
        <div className='box'>
            <div className="box__pic">
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}
