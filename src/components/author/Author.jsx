import React from 'react'
import author1 from "./../../img/author1.png"
import author2 from "./../../img/author2.png"
import author3 from "./../../img/author3.png"
import author4 from "./../../img/author4.png"
import facebook from "./../../img/facebook.svg"
import instagram from "./../../img/instagram.svg"
import linkedin from "./../../img/linkedin.svg"
import twitter from "./../../img/twitter.svg"
import featured from "./../../img/Featured in.svg"
import logo1 from "./../../img/Logo1.svg"
import logo2 from "./../../img/Logo2.svg"
import logo3 from "./../../img/Logo3.svg"
import logo4 from "./../../img/Logo4.svg"
import logo5 from "./../../img/Logo5.svg"
import "./Author.css"
export default function Author() {
    return (
        <section className='author-section'>
            <div className="container">
                <p className="title">List of Authors</p>
                <div className="cards">
                    <a href="/author">

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
                    </a>
                    <a href="/author">
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
                    </a>
                    <a href="/author">
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
                    </a>
                    <a href="/author">
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
                    </a>
                </div>
                <div className="companys">
                    <img src={featured} alt="featured text" />
                    <img src={logo1} alt="logo img" />
                    <img src={logo2} alt="logo img" />
                    <img src={logo3} alt="logo img" />
                    <img src={logo4} alt="logo img" />
                    <img src={logo5} alt="logo img" />
                </div>
            </div>
        </section>
    )
}
