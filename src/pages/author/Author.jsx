import React from 'react'
import person from "./../../img/author-person.png"
import "./Author.css"
import facebook from "./../../img/facebook.svg"
import instagram from "./../../img/instagram.svg"
import linkedin from "./../../img/linkedin.svg"
import twitter from "./../../img/twitter.svg"
import smiledPerson from "./../../img/smiledPerson.png"
import { useNavigate } from 'react-router-dom'

export default function Author() {
    const navigate= useNavigate()

    return (
        <section className='author-page'>
            <div className="author-intro">
                <div className="container">
                    <div className="items">
                        <img src={person} alt="person img" />
                        <div className="text">
                            <p className="title">Hey there, I’m Andrew Jonhson and welcome to my Blog</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                            <div className="social">
                                <a href="#"><img src={facebook} alt="social media img" /></a>
                                <a href="#"><img src={twitter} alt="social media img" /></a>
                                <a href="#"><img src={instagram} alt="social media img" /></a>
                                <a href="#"><img src={linkedin} alt="social media img" /></a>
                            </div>
                        </div>
                        <div className="line">
                            <div className='yellow-line'></div>
                            <div className='purple-line'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-post">
                <div className="container">
                    <p className="title">My Posts</p>
                    <hr />
                    <div className="posts">
                        <div className="post" onClick={() => navigate("/blog/post-info")}>
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

                </div>
            </div>
        </section>
    )
}
