import React from 'react'
import smiledPerson from "./../../img/smiledPerson.png"
import categoryImg2 from "./../../img/categoryImg2.svg"
import categoryImg3 from "./../../img/categoryImg3.svg"
import categoryImg4 from "./../../img/categoryImg4.svg"
import iconBack from "./../../img/iconback.svg"

import "./Blog.css"
import { useNavigate } from 'react-router-dom'
export default function Blog() {
    const navigate= useNavigate()
    return (
        <section className='blog-section'>
            <div className="featured">
                <div className="container">
                    <div className="items">
                        <div className="texts">
                            <p className="mini-text">Featured Post</p>
                            <p className="title">Step-by-step guide to choosing great<br />font pairs</p>
                            <p className="data">By <span>John Doe</span>   l   May 23, 2022 </p>
                            <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat<br />
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <button className="yellow-button">{"Read More >"}</button>
                        </div>
                        <div className="img">
                            <img src={smiledPerson} alt="smiled person img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-post">
                <div className="container">
                    <p className="title">All post</p>
                    <hr />
                    <div className="posts">
                        <div className="post" onClick={()=>navigate("/blog/post-info")}>
                            <div className="img">
                                <img src={smiledPerson} alt="post image" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Startup</p>
                                <p className="title">Design tips for designers that cover <br />  everything you need</p>
                                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img">
                                <img src={smiledPerson} alt="post image" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Startup</p>
                                <p className="title">Design tips for designers that cover <br />  everything you need</p>
                                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img">
                                <img src={smiledPerson} alt="post image" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Startup</p>
                                <p className="title">Design tips for designers that cover <br />  everything you need</p>
                                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img">
                                <img src={smiledPerson} alt="post image" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Startup</p>
                                <p className="title">Design tips for designers that cover <br />  everything you need</p>
                                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img">
                                <img src={smiledPerson} alt="post image" />
                            </div>
                            <div className="text">
                                <p className="mini-text">Startup</p>
                                <p className="title">Design tips for designers that cover <br />  everything you need</p>
                                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                    </div>
                    <div className="category-side">
                        <p className="title">Choose A Catagory</p>
                        <div className="categories">
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg4} alt="category img" className='img2' />
                                </div>
                                <p className="title">Business</p>
                                <p className="desc">Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
                            </div>
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg2} alt="category img" className='img2' />
                                </div>
                                <p className="title">Startup</p>
                                <p className="desc">Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
                            </div>
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg3} alt="category img" className='img2' />
                                </div>
                                <p className="title">Economy</p>
                                <p className="desc">Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
                            </div>
                            <div className="category">
                                <div className='category-img'>
                                    <img src={iconBack} alt=" " className='img1' />
                                    <img src={categoryImg4} alt="category img" className='img2' />
                                </div>
                                <p className="title">Technology</p>
                                <p className="desc">Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="join">
                        <p className="title">
                            Join our team to be a part <br /> of our story
                        </p>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt.</p>
                        <a href="/contact"><button className="yellow-button" >Join Now</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
