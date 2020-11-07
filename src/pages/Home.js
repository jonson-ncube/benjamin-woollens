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

export default function Home() {
    return (
        <div>
            <Slider />
            <div className="boxContainer">
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
            </div>
            <HomeImage />
            <div className="boxContainer">
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
            </div>
            <HomeImage />
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
