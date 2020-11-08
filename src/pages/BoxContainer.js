import React from 'react'
import './BoxContainer.css'

export default function BoxContainer({ src, alt, text }) {
    return (
        <div className='box'>
            <img src={src} alt={alt} className="box__pic" />
            <p>Everything</p>
            <div className="box__sub">
                <p>{text}</p>
            </div>
        </div>
    )
}
