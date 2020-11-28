import React from 'react'
import './Slider.css'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImgComp from './ImgComp'

import i1 from '../assets/G-18.jpg'
import i4 from '../assets/4.jpg'
import i2 from '../assets/G-02.jpg'
import i3 from '../assets/i4.jpg'

SwiperCore.use([Navigation, Pagination])

export default function Slider() {

    // const sliderArr = [
    //     <ImgComp src={i3} />,
    //     <ImgComp src={i1} />,
    //     <ImgComp src={i2} />,
    //     <ImgComp src={i4} />,
    // ]

    // const [x, setX] = useState(0)

    // const goLeft = () => {
    //     x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    // }

    // const goRight = () => {
    //     x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    // }

    return (
        <div className="slider">

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            // onSlideChange={() => { }}
            // onSwiper={(swiper) => { }}
            >
                <SwiperSlide><ImgComp src={i3} /></SwiperSlide>
                <SwiperSlide><ImgComp src={i1} /> </SwiperSlide>
                <SwiperSlide><ImgComp src={i4} /> </SwiperSlide>
                <SwiperSlide><ImgComp src={i2} /> </SwiperSlide>
            </Swiper>
        </div>

        // <div className='slider' >
        //     {sliderArr.map((item, index) => {

        //         return (
        //             <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }} >
        //                 {item}
        //             </div>
        //         )
        //     })}
        //     <button className='goLeft' onClick={goLeft} ><ArrowBackIosIcon /></button>
        //     <button className='goRight' onClick={goRight} ><ArrowForwardIosIcon /></button>
        // </div>
    )
}
