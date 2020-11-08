import React from 'react'
import BrandIcon from '../components/BrandIcon'
import HomeImage from '../components/HomeImage'
import Slider from '../components/Slider'
import BoxContainer from './BoxContainer'
import './Home.css'

//logo images 
import carnet from '../assets/images/logo_03.png'
import channel from '../assets/images/logo_05.png'
import dormeiul from '../assets/images/logo_07.png'
import elie from '../assets/images/logo_09.png'
import emanuel from '../assets/images/logo_11.png'
import harris from '../assets/images/logo_18.png'
import ratti from '../assets/images/logo_20.png'
import reda from '../assets/images/logo_22.png'
import soktas from '../assets/images/logo_24.png'
import thomas from '../assets/images/logo_25.png'
import valentino from '../assets/images/logo_32.png'
import versace from '../assets/images/logo_34.png'
import lora from '../assets/images/logo_36.png'
import vitale from '../assets/images/logo_38.png'

// fabric images
import samples from '../assets/samples.jpg'
import promos from '../assets/promos.jpg'

// box images
import brocade from '../assets/box/i1.jpg'
import coating from '../assets/box/i2.jpg'
import denim from '../assets/box/i3.jpg'
import knit from '../assets/box/i4.jpg'
import hiTech from '../assets/box/i5.jpg'
import linen from '../assets/box/i6.jpg'
import shirting from '../assets/box/i7.jpg'
import silk from '../assets/box/i8.jpg'
import tweed from '../assets/box/i9.jpg'
import velvet from '../assets/box/i10.jpg'


export default function Home() {
    return (
        <div>
            <Slider />
            <div className="boxContainer">
                <BoxContainer src={brocade} alt='brocade' />
                <BoxContainer src={coating} alt='coating' />
                <BoxContainer src={denim} alt='demin' />
                <BoxContainer src={knit} alt='knit' />
                <BoxContainer src={hiTech} alt='Hi-Tech' />
            </div>
            <HomeImage src={promos} alt='sales' />
            <div className="boxContainer">
                <BoxContainer src={linen} alt='linen' />
                <BoxContainer src={shirting} alt='shirting' />
                <BoxContainer src={silk} alt='silk' />
                <BoxContainer src={tweed} alt='tweed' />
                <BoxContainer src={velvet} alt='velvet' />
            </div>
            <HomeImage src={samples} alt='Sample-fabrics' />
            <div className="home__brands">
                <h2>BRANDS WE STOCK</h2>
                <div className="home__para">
                    <p>Benjamin Woollens stocks fabrics from many of the worlds most iconic fashion brands.</p>
                    <p>These include some of the worlds best fabrics such as Brocades, cashmeres, linens, silks and pure wools.</p>
                </div>
            </div>
            <div className="home__icons">
                <BrandIcon src={carnet} />
                <BrandIcon src={channel} />
                <BrandIcon src={dormeiul} />
                <BrandIcon src={elie} />
                <BrandIcon src={emanuel} />
                <BrandIcon src={harris} />
                <BrandIcon src={ratti} />
                <BrandIcon src={reda} />
                <BrandIcon src={soktas} />
                <BrandIcon src={thomas} />
                <BrandIcon src={valentino} />
                <BrandIcon src={versace} />
                <BrandIcon src={lora} />
                <BrandIcon src={vitale} />
            </div>
        </div>
    )
}
