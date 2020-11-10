import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../assets/benjwool_logo.jpg'
import IconButton from '@material-ui/core/IconButton'

export default function Header() {

    const navStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className='header'>
            <Link to='/'>
                <div className="header">
                    <img src={logo} className='header__logo' alt='logo' />
                </div>
            </Link>
            <nav className="header__nav">
                <div className="header__left">
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </div>
                <ul className="header__buttons" >
                    <Link style={navStyle} to='/about'>
                        <li>ABOUT US</li>
                    </Link>
                    <Link style={navStyle} to='/fabrics'>
                        <li>OUR FABRICS</li>
                    </Link>
                    <Link style={navStyle} to='/shop'>
                        <li>SHOP</li>
                    </Link>
                    <Link style={navStyle} to="/contact">
                        <li>CONTACT US</li>
                    </Link>
                </ul>
                <IconButton>
                    <Link to='/checkout'>
                        <div className="header__right">
                            <span className="header__icon">2</span>
                            <ShoppingCartIcon className='shoppingCart' />
                        </div>
                    </Link>
                </IconButton>
            </nav>
        </div>
    )
}
