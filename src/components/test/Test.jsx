import React from 'react'
import "./Test.css"
import profile from "./../../img/profilePcture.svg"
export default function Test() {
    return (
        <section className='test-section'>
            <div className="container">
                <div className="box-side">
                    <div className="box__left">
                        <p className="mini-text">TESTIMONIALs</p>
                        <p className="title">What people say<br />about our blog</p>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="line"></div>
                    <div className="box__right">
                        <p className="desc">
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit, sed do <br />
                            eiusmod tempor incididunt ut labore et<br />
                            dolore magna aliqua.
                        </p>
                        <div className="profile">
                            <img src={profile} alt="profile picture" />
                            <div className="text">
                                <p className="title">Jonathan Vallem</p>
                                <p className="desc">New york, USA</p>
                            </div>
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
