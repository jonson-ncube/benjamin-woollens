import React from 'react'
import './ShopComp.css'

export default function ShopComp({ title, src }) {
    return (
        <div className='shopItem_container'>
            <img src={src} alt="Product-Image" className="store__img" />
            <button>{title}</button>
        </div>
    )
}
