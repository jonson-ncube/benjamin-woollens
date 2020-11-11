import React from 'react'
import './ShopHeader.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom'

const navStyle = {
    textDecoration: 'none',
    color: 'black',
    // display: 'flex',
    // justifyContent: 'center',
}

export default function ShopHeader() {
    return (
        <div className='shopping_header'>
            <Link to='/shop' style={navStyle}>
                <ArrowBackIosIcon fontSize='inherit' />
                <button className='back_button'>Back</button>
            </Link>
        </div>
    )
}
