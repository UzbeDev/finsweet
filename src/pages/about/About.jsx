import React from 'react'
import back from "./../../img/about-page-back.png"
import "./About.css"
import team1 from "./../../img/team1.png"
import team2 from "./../../img/team2.png"
import author1 from "./../../img/author1.png"
import author2 from "./../../img/author2.png"
import author3 from "./../../img/author3.png"
import author4 from "./../../img/author4.png"
import facebook from "./../../img/facebook.svg"
import instagram from "./../../img/instagram.svg"
import linkedin from "./../../img/linkedin.svg"
import twitter from "./../../img/twitter.svg"
export default function About() {
    return (
        <section className='about-page'>
            <div className="container">
                <div className="about-intro">
                    <div className="about-card">
                        <div className="card">
                            <p className="mini-text">about us</p>
                            <p className="title">We are a team of content writers who share their learnings</p>
                        </div>
                        <div>
                            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <img src={back} alt="back img" className='back' />
                    <div className="front-img">
                        <div className="block">
                            <div className="item">
                                <p className="number">
                                    12+
                                </p>
                                <p className="text">
                                    Blogs Published
                                </p>
                            </div>
                            <div className="item">
                                <p className="number">
                                    18K+
                                </p>
                                <p className="text">
                                    Views on Finsweet
                                </p>
                            </div>
                            <div className="item">
                                <p className="number">
                                    30K+
                                </p>
                                <p className="text">
                                    Total active Users
                                </p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="big-card">
                        <div className="right">
                            <p className="mini-text">our mision</p>
                            <p className="title">Creating valuable content for creatives all around the world</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                        </div>
                        <div className="left">
                            <p className="mini-text">our vision</p>
                            <p className="title">A platform that empowers individuals to improve</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                        </div>
                    </div>

                </div>
                <div className="about-team">
                    <div className="card">
                        <div className="text">
                            <p className="title">Our team of creatives</p>
                            <p className="b-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                        <div className="img">
                            <img src={team1} alt="img" />
                            <div className="shape"></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={team2} alt="img" />
                            <div className="shape2"></div>
                        </div>
                        <div className="text">
                            <p className="title">Our team of creatives</p>
                            <p className="b-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                    </div>
                </div>
                <p className="author-title title">List of Authors</p>
                <div className="cards">
                    <div className="card">
                        <img src={author1} alt="author img" />
                        <p className="title">Floyd Miles</p>
                        <p className="desc">Content Writer @Company</p>
                        <div className="social">
                            <a href="#"><img src={facebook} alt="social media img" /></a>
                            <a href="#"><img src={twitter} alt="social media img" /></a>
                            <a href="#"><img src={instagram} alt="social media img" /></a>
                            <a href="#"><img src={linkedin} alt="social media img" /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={author2} alt="author img" />
                        <p className="title">Floyd Miles</p>
                        <p className="desc">Content Writer @Company</p>
                        <div className="social">
                            <a href="#"><img src={facebook} alt="social media img" /></a>
                            <a href="#"><img src={twitter} alt="social media img" /></a>
                            <a href="#"><img src={instagram} alt="social media img" /></a>
                            <a href="#"><img src={linkedin} alt="social media img" /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={author3} alt="author img" />
                        <p className="title">Floyd Miles</p>
                        <p className="desc">Content Writer @Company</p>
                        <div className="social">
                            <a href="#"><img src={facebook} alt="social media img" /></a>
                            <a href="#"><img src={twitter} alt="social media img" /></a>
                            <a href="#"><img src={instagram} alt="social media img" /></a>
                            <a href="#"><img src={linkedin} alt="social media img" /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={author4} alt="author img" />
                        <p className="title">Floyd Miles</p>
                        <p className="desc">Content Writer @Company</p>
                        <div className="social">
                            <a href="#"><img src={facebook} alt="social media img" /></a>
                            <a href="#"><img src={twitter} alt="social media img" /></a>
                            <a href="#"><img src={instagram} alt="social media img" /></a>
                            <a href="#"><img src={linkedin} alt="social media img" /></a>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={author4} alt="author img" />
                        <p className="title">Floyd Miles</p>
                        <p className="desc">Content Writer @Company</p>
                        <div className="social">
                            <a href="#"><img src={facebook} alt="social media img" /></a>
                            <a href="#"><img src={twitter} alt="social media img" /></a>
                            <a href="#"><img src={instagram} alt="social media img" /></a>
                            <a href="#"><img src={linkedin} alt="social media img" /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={author3} alt="author img" />
                        <p className="title">Floyd Miles</p>
                        <p className="desc">Content Writer @Company</p>
                        <div className="social">
                            <a href="#"><img src={facebook} alt="social media img" /></a>
                            <a href="#"><img src={twitter} alt="social media img" /></a>
                            <a href="#"><img src={instagram} alt="social media img" /></a>
                            <a href="#"><img src={linkedin} alt="social media img" /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={author2} alt="author img" />
                        <p className="title">Floyd Miles</p>
                        <p className="desc">Content Writer @Company</p>
                        <div className="social">
                            <a href="#"><img src={facebook} alt="social media img" /></a>
                            <a href="#"><img src={twitter} alt="social media img" /></a>
                            <a href="#"><img src={instagram} alt="social media img" /></a>
                            <a href="#"><img src={linkedin} alt="social media img" /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={author1} alt="author img" />
                        <p className="title">Floyd Miles</p>
                        <p className="desc">Content Writer @Company</p>
                        <div className="social">
                            <a href="#"><img src={facebook} alt="social media img" /></a>
                            <a href="#"><img src={twitter} alt="social media img" /></a>
                            <a href="#"><img src={instagram} alt="social media img" /></a>
                            <a href="#"><img src={linkedin} alt="social media img" /></a>
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
        </section>
    )
}
