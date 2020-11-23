import React from 'react'
import './ShopPage.css'
import banner from '../assets/images/shop_banner_02.jpg'
import ShopItem from '../components/ShopItem'
import { Link } from 'react-router-dom'

//Shop cover images

import bespoke from '../assets/covers/bespoke.png'
import brocade from '../assets/covers/brocade.png'
import coating from '../assets/covers/coating.png'
import cotton from '../assets/covers/cotton.png'
import denim from '../assets/covers/denim.png'
import georgette from '../assets/covers/georgette.png'
import hi_tech from '../assets/covers/hi-tech.png'
import knit from '../assets/covers/knit.png'
import linen from '../assets/covers/linen.png'
import lining from '../assets/covers/lining.png'
import shirting from '../assets/covers/shirting.png'
import silk from '../assets/covers/silk.png'
import trimming from '../assets/covers/triming.png'
import tweed from '../assets/covers/tweed.png'
import velvet from '../assets/covers/velvet.png'
import ppe from '../assets/covers/ppe.png'

const navStyle = {
    textDecoration: 'none',
    color: 'black',
}


export default function ShopPage() {
    return (
        <div className='shop__container'>
            <div className="shop__banner">
                <div className="header__things">
                    <h3 className='all__things'>ALL THINGS</h3>
                    <h2 className='all__fashion' >FASHION FABRICS</h2>
                </div>
                <img src={banner} alt="Shop-Banner" className="shop__image" />
            </div>
            <div className="shop__body">
                <h2>STORE COLLECTION</h2>
                <div className="shop_group">
                    <div className="shop__row">
                        <Link to='/bespoke' style={navStyle} >
                            <ShopItem
                                header='ALL THINGS BESPOKE'
                                src={bespoke}
                            />
                        </Link>
                        <Link to='/brocade' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS BROCADE'
                                src={brocade}
                            />
                        </Link>
                        <Link to='/coating' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS COATING'
                                src={coating}
                            />
                        </Link>
                        <Link to='/cotton' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS COTTON'
                                src={cotton}
                            />
                        </Link>
                    </div>
                    <div className="shop__row">
                        <Link to='/denim' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS DENIM'
                                src={denim}
                            />
                        </Link>
                        <Link to='/goergette' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS GEORGETTE'
                                src={georgette}
                            />
                        </Link>
                        <Link to='/hitech' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS HI-TECH'
                                src={hi_tech}
                            />
                        </Link>
                        <Link to='/knit' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS KNIT'
                                src={knit}
                            />
                        </Link>
                    </div>
                    <div className="shop__row">
                        <Link to='/linen' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS LINEN'
                                src={linen}
                            />
                        </Link>
                        <Link to='/lining' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS LINING'
                                src={lining}
                            />
                        </Link>
                        <Link to='/shirting' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS SHIRTING'
                                src={shirting}
                            />
                        </Link>
                        <Link to='/silk' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS SILK'
                                src={silk}
                            />
                        </Link>
                    </div>
                    <div className="shop__row">
                        <Link to='/tweed' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS TWEED'
                                src={tweed}
                            />
                        </Link>
                        <Link to='/velvet' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS VELVET'
                                src={velvet}
                            />
                        </Link>
                        <Link to='/trimming' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS TRIMMING'
                                src={trimming}
                            />
                        </Link>
                        <Link to='/ppe' style={navStyle}>
                            <ShopItem
                                header='ALL THINGS PPE'
                                src={ppe}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
