import React from 'react'
import "./About.css"
import categoryImg2 from "./../../img/categoryImg2.svg"
import categoryImg3 from "./../../img/categoryImg3.svg"
import categoryImg4 from "./../../img/categoryImg4.svg"
import iconBack from "./../../img/iconback.svg"
export default function About() {
    return (
        <section className='about-section'>
            <div className="container">
                <div className="line">
                    <div className='yellow-line'></div>
                    <div className='purple-line'></div>
                </div>
                <div className="main-side">
                    <div className="left-side">
                        <p className="mini-text">About us</p>
                        <p className="title">
                            We are a community of<br />content writers who share their<br />learnings
                        </p>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="/about">{"Read More >"}</a>
                    </div>
                    <div className="right-side">
                        <p className="mini-text">Our mision</p>
                        <p className="title">
                            Creating valuable content for<br />creatives all around the world</p>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br /> ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="category-side">
                    <p className="title">Choose A Category</p>
                    <div className="categories">
                        <a href="/category">
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg4} alt="category img" className='img2' />
                                </div>
                                <p className="title">Business</p>
                                <p className="desc">Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
                            </div>
                        </a>
                        <a href="/category">
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg2} alt="category img" className='img2' />
                                </div>
                                <p className="title">Startup</p>
                                <p className="desc">Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
                            </div>
                        </a>
                        <a href="/category">

                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg3} alt="category img" className='img2' />
                                </div>
                                <p className="title">Economy</p>
                                <p className="desc">Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
                            </div>
                        </a>
                        <a href="/category">


                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg4} alt="category img" className='img2' />
                                </div>
                                <p className="title">Technology</p>
                                <p className="desc">Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
