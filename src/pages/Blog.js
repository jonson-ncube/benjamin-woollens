import React from 'react'
import './Blog.css'
import blogCover from '../assets/blog/cover.jpg'
import toxic from '../assets/blog/photo.jpeg'
import BlogItem from '../components/BlogItem'

export default function Blog() {
    return (
        <div className='blog__container'>
            <div className="blog__hero">
                <div className="header__things">
                    <h1 className='all__inside' >THE INSIDE THREAD</h1>
                    <h3 className='all__inside'>BENJAMIN WOOLLENS BLOG</h3>
                </div>
                <img src={blogCover} alt="cover-photo" className="blog__img" />
            </div>
            <h1>Our Articles</h1>
            <div className="blogs__container">
                <div className="blog__item">
                    <BlogItem
                        src={toxic}
                        title='5 TOXIC FABRICS THAT CAN BE HARMFUL TO YOUR HEALTH'
                        date='25 Sep 2020'
                    />
                    <BlogItem
                        src={toxic}
                        title='5 TOXIC FABRICS THAT CAN BE HARMFUL TO YOUR HEALTH'
                        date='25 Sep 2020'
                    />
                    <BlogItem
                        src={toxic}
                        title='5 TOXIC FABRICS THAT CAN BE HARMFUL TO YOUR HEALTH'
                        date='25 Sep 2020'
                    />
                </div>
                <div className="blog__item">
                    <BlogItem
                        src={toxic}
                        title='5 TOXIC FABRICS THAT CAN BE HARMFUL TO YOUR HEALTH'
                        date='25 Sep 2020'
                    />
                    <BlogItem
                        src={toxic}
                        title='5 TOXIC FABRICS THAT CAN BE HARMFUL TO YOUR HEALTH'
                        date='25 Sep 2020'
                    />
                    <BlogItem
                        src={toxic}
                        title='5 TOXIC FABRICS THAT CAN BE HARMFUL TO YOUR HEALTH'
                        date='25 Sep 2020'
                    />
                </div>
            </div>
        </div>
    )
}
