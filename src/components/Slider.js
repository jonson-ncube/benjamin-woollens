import React, { useState } from 'react'
import './Slider.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImgComp from './ImgComp'

import i1 from '../assets/G-18.jpg'
import i4 from '../assets/4.jpg'
import i2 from '../assets/G-02.jpg'
import i3 from '../assets/i4.jpg'

export default function Slider() {

    const sliderArr = [
        <ImgComp src={i3} />,
        <ImgComp src={i1} />,
        <ImgComp src={i2} />,
        <ImgComp src={i4} />,
    ]

    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    }

    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }

    return (
        <div className='slider' >
            {sliderArr.map((item, index) => {

                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }} >
                        {item}
                    </div>
                )
            })}
            <button className='goLeft' onClick={goLeft} ><ArrowBackIosIcon /></button>
            <button className='goRight' onClick={goRight} ><ArrowForwardIosIcon /></button>
        </div>
    )
}
