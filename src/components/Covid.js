import React from 'react'
import './Covid.css'
import logo from '../assets/covid_logo.jpg'

export default function Covid() {
    return (
        <>
            <div className='covid__container'>
                <a href='https://sacoronavirus.co.za/' target='blank' className="covid_text">
                    Keep updated on COVID-19
            </a>
                <img className="covid__logo" src={logo} alt="corona-virus-alert" />
            </div>
            {/* <div className="covid__header">
                <p><strong>Emergency Hotline: 0800 029 999</strong></p>
                <p>WhatsApp Support Line: 0600 123 456</p>
            </div> */}
        </>
    )
}
