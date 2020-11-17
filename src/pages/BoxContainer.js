import React from 'react'
import './BoxContainer.css'

export default function BoxContainer({ src, alt, text }) {
    return (
        <div className='box'>
            <img src={src} alt={alt} className="box__pic" />
            <div className="box__sub">
                <p>Everything</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
