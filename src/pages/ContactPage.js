import React from 'react'
import './ContactPage.css'

export default function ContactPage() {
    return (
        <div className='contact__container'>
            <h1>Contact us</h1>
            <div className="contact__header">
                <div className="contact__address">
                    <h2>HEAD OFFICE</h2>
                    <p>THE TATTERSALLS BUILDING</p>
                    <p>NO.3 LOVEDAY STR</p>
                    <p>(CORNER ALBERT ST.)</p>
                    <p>MARSHALLTOWN</p>
                    <p>2001</p>
                </div>
                <div className="contact__jhb">
                    <p>Tel: 011 492 2827 / 2724</p>
                    <a href="mailto:info@benjaminwoollens.co.za">info@benjaminwoollens.co.za</a>
                </div>
                <div className="contact__map">
                    Map
                </div>
            </div>
            <div className="contact__header">
                <div className="contact__address">
                    <h2>PRETORIA SHOWROOM</h2>
                    <p>THE STUDIO AT WATERKLOOF</p>
                    <p>42 GOLF ST</p>
                    <p>WATERKLOOF</p>
                    <p>PRETORIA</p>
                    <p>0145</p>
                </div>
                <div className="contact__jhb">
                    <p>Cel: 082 322 0546</p>
                    <a href="mailto:info@benjaminwoollens.co.za">info@benjaminwoollens.co.za</a>
                </div>
                <div className="contact__map">
                    Map
                </div>
            </div>
            <div className="contact__header">
                <div className="contact__address">
                    <h2>CAPE TOWN SHOWROOM</h2>
                    <p>RIVAGLADE INTERNATIONAL FABRICS</p>
                    <p>UNIT D1</p>
                    <p>PINELANDS BUSINESS PARK</p>
                    <p>NEW MILL ROAD</p>
                    <p>PINELANDS</p>
                    <p>7405</p>
                </div>
                <div className="contact__jhb">
                    <p>Tel: 021 531 2461</p>
                    <p>Cel: 082 550 4769</p>
                    <a href="mailto:geralds.za@gmail.com">geralds.za@gmail.com</a>
                </div>
                <div className="contact__map">
                    Map
                </div>
            </div>
        </div>
    )
}
