import React from 'react'
import './ShopComp.css'
import { Link } from 'react-router-dom'

export default function ShopComp({ title, src }) {
    return (
        <>
            <Link to='/product'>
                <div className='shopItem_container'>
                    <img src={src} alt="Product-Image" className="store__img" />
                    <button onClick={() => { }}  >{title}</button>
                </div>
            </Link>
        </>
    )
}
