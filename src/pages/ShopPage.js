import React from 'react'
import './ShopPage.css'
import banner from '../assets/images/shop_banner_02.jpg'
import ShopItem from '../components/ShopItem'

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
import triming from '../assets/covers/triming.png'
import tweed from '../assets/covers/tweed.png'
import velvet from '../assets/covers/velvet.png'
import ppe from '../assets/covers/ppe.png'




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
                        <ShopItem
                            header='EVERYTHING BESPOKE'
                            src={bespoke}
                        />
                        <ShopItem
                            header='EVERYTHING BROCADE'
                            src={brocade}
                        />
                        <ShopItem
                            header='EVERYTHING COATING'
                            src={coating}
                        />
                        <ShopItem
                            header='EVERYTHING COTTON'
                            src={cotton}
                        />
                    </div>
                    <div className="shop__row">
                        <ShopItem
                            header='EVERYTHING DENIM'
                            src={denim}
                        />
                        <ShopItem
                            header='EVERYTHING GEORGETTE'
                            src={georgette}
                        />
                        <ShopItem
                            header='EVERYTHING HI-TECH'
                            src={hi_tech}
                        />
                        <ShopItem
                            header='EVERYTHING KNIT'
                            src={knit}
                        />
                    </div>
                    <div className="shop__row">
                        <ShopItem
                            header='EVERYTHING LINEN'
                            src={linen}
                        />
                        <ShopItem
                            header='EVERYTHING LINING'
                            src={lining}
                        />
                        <ShopItem
                            header='EVERYTHING SHIRTING'
                            src={shirting}
                        />
                        <ShopItem
                            header='EVERYTHING SILK'
                            src={silk}
                        />
                    </div>
                    <div className="shop__row">
                        <ShopItem
                            header='EVERYTHING TRIMMING'
                            src={triming}
                        />
                        <ShopItem
                            header='EVERYTHING TWEED'
                            src={tweed}
                        />
                        <ShopItem
                            header='EVERYTHING VELVET'
                            src={velvet}
                        />
                        <ShopItem
                            header='EVERYTHING PPE'
                            src={ppe}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
