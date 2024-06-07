import React from 'react'
import "./Business.css"
import person from "./../../img/business.png"
import categoryImg2 from "./../../img/categoryImg2.svg"
import categoryImg3 from "./../../img/categoryImg3.svg"
import categoryImg4 from "./../../img/categoryImg4.svg"
import iconBack from "./../../img/iconback.svg"

export default function Business() {
    return (
        <section className='business-page'>
            <div className="intro">
                <p className="title">Business</p>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <p className="mini-text">{"Blog > Business"}</p>
            </div>
            <div className="container">
                <div className="main">
                    <div className="posts">
                        <div className="post">
                            <div className="img">
                                <img src={person} alt="smiled person" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Business</p>
                                <p className="title">Top 6 free website mockup tools 2022</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img">
                                <img src={person} alt="smiled person" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Business</p>
                                <p className="title">Top 6 free website mockup tools 2022</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img">
                                <img src={person} alt="smiled person" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Business</p>
                                <p className="title">Top 6 free website mockup tools 2022</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img">
                                <img src={person} alt="smiled person" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Business</p>
                                <p className="title">Top 6 free website mockup tools 2022</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                            </div>
                        </div>
                    </div>
                    <div className="category-side">
                        <p className="title">Catagories</p>
                        <div className="categories">
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg4} alt="category img" className='img2' />
                                </div>
                                <p className="title">Business</p>
                            </div>
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg2} alt="category img" className='img2' />
                                </div>
                                <p className="title">Startup</p>
                            </div>
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg3} alt="category img" className='img2' />
                                </div>
                                <p className="title">Economy</p>
                            </div>
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg4} alt="category img" className='img2' />
                                </div>
                                <p className="title">Technology</p>
                            </div>
                        </div>
                        <div className="tags">
                            <p className="title">All Tags</p>
                            <div className="buttons">
                                <button className="tag">Business</button>
                                <button className="tag">Experience</button>
                                <button className="tag">Screen</button>
                                <button className="tag">Marketing</button>
                                <button className="tag">Life</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
