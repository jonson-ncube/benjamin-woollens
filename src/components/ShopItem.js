import React from 'react'
import './ShopItem.css'

export default function ShopItem({ src, header }) {
    return (
        <div className='item__container'>
            <h4>{header}</h4>
            <div className="item__image">
                <img src={src} alt="fabic-picture" className="item__pic" />
            </div>
            <button className='item__button'>SHOP NOW</button>
        </div>
    )
}
