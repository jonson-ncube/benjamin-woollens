import React from 'react'
import benjamin from '../assets/images/benjamin_02.png'
import store from '../assets/images/benjamin_04.png'
import './AboutPage.css'

export default function AboutPage() {
    return (
        <div>
            <div className="about__banner">
                <img src={benjamin} alt='Mr-Benjamin' className='about__hero' />
                <img src={store} alt='Benjamin-Woollens-Store' className='about__hero' />
            </div>
            <div className="about__body">
                <h2>ABOUT BENJAMIN WOOLLENS</h2>
                <p>Created in 1967 by Michael Benjamin, Benjamin Woollens has been at the forefront of the fabric industry in South Africa for over six decades. Benjamin Woollens sources from the world’s leading mills and fabric houses, with a strong emphasis on natural fabrics such as wools, silks, linens, cottons and cashmere.</p>
                <p>Since 2001, Michael’s son, Stephen Benjamin, has been at the helm of the business. He strives to maintain the quality of product and high level of Customer Service that Benjamin Woollens has always been known for. Benjamin Woollens  continually sources the most current and fashionable fabrics.</p>
                <p>From classic to contemporary, Benjamin Woollens ensures that you will always be stylish, trendy and looking your best. </p>
            </div>
        </div>
    )
}
