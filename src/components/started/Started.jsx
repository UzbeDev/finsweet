import React from 'react'
import "./Started.css"
import startedBack from "./../../img/startedBack.png"
export default function Started() {
    return (
        <section className='section-started'>
            <div className="container">
                <div className="items">
                    <img src={startedBack} alt="started back img" />
                    <div className="main-side">
                        <p className="mini-text">
                            why we started
                        </p>
                        <p className="title">
                            It started out as a simple<br />
                            idea and evolved into<br />
                            our passion
                        </p>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </div>
                        <a href="/about"><button className="yellow-button">{"Discover our story >"}</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
