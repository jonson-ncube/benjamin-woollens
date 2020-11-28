import React from 'react'
import './BlogItem.css'

export default function BlogItem({ src, title, date }) {
    return (
        <div className='blog__cover'>
            <img src={src} alt="Blog-Pic" className='blog__pic' />
            <div className="blog__detail">
                <button>{title}</button>
                <p>{date}</p>
            </div>

        </div>
    )
}
