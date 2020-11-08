import React from 'react'
import './HomeImage.css'
import { Link } from 'react-router-dom'


export default function HomeImage({ src, alt, title, btn, link }) {

    const navStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className='home__container'>
            <div className="home__hero">
                <h2 className='home__text'>{title}</h2>
                <img src={src} alt={alt} />
                <button className='home__btn'>
                    <Link style={navStyle} to={link}>{btn}</Link>
                </button>

            </div>
        </div>
    )
}
