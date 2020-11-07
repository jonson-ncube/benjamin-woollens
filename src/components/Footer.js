import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {

    const navStyle = {
        textDecoration: 'none',
        color: 'white',
        marginTop: -25
    }

    return (
        <>
            <div className="home__sub">
                <h2>Subscribe to our newsletter</h2>
                <p className='footer__sign'>Sign up with your email address to receive news and updates.</p>
                <div>
                    <input
                        className='home__textInput'
                        placeholder='email address'
                    />
                    <button className='footer__button'>Sign up</button>
                </div>
                <p>We respect privacy</p>
            </div>
            <div className="home__footer">
                <div className="footer__details">
                    <div className="footer__address">
                        <h4>Head Office and Showroom</h4>
                        <p>No. 3 Loveday Street</p>
                        <p>Marshalltown</p>
                        <p>Johannesburg</p>
                        <p>2001</p>
                    </div>
                    <div className="footer__address">
                        <h4>Business Hours</h4>
                        <p><span>Mon - Fri :</span> 09:00 - 16:00</p>
                        <p><span>Sat :</span>  10:00 - 13:00</p>
                        <p>Sunday & Public Holidays</p>
                        <p>Closed</p>
                    </div>
                    <div className="footer__address">
                        <h4>Customer Service</h4>
                        <Link style={navStyle} to='/delivery'>
                            <p>Delivery Information</p>
                        </Link>
                        <Link style={navStyle} to='/feedback'>
                            <p>Feedback & Review</p>
                        </Link>
                        <Link style={navStyle} to='/faq'>
                            <p>FAQ</p>
                        </Link>
                        <Link style={navStyle} to='/returns'>
                            <p>Returns</p>
                        </Link>
                    </div>
                    <div className="footer__address">
                        <h4>About Us</h4>
                        <Link style={navStyle} to='/learn'>
                            <p>Learn About Fabrics</p>
                        </Link>
                        <Link to='/abbreviation' style={navStyle}>
                            <p>Fabric Abbreviations</p>
                        </Link>
                        <Link to='/blog' style={navStyle}>
                            <p>The Inside Thread Blog</p>
                        </Link>
                        <Link to='press' style={navStyle}>
                            <p>Press</p>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="home__copy">
                <div className="footer__copy">
                    <p>© 2020 Benjamin Woollens.</p>
                </div>
                <div className="footer__terms">
                    <a href="./policy">Our Privacy Policy</a>
                    <a href="./terms">• Our Terms & Conditions</a>
                </div>
            </div>
        </>
    )
}
