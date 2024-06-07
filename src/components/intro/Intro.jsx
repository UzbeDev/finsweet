import React from 'react'
import "./Intro.css"
export default function Intro() {
    return (
        <section className='intro-section'>
            <div className="container">
                <p className="mini-text">Posted on <b>startup</b></p>
                <p className="title">Step-by-step guide to choosing<br />great font pairs</p>
                <p className="data">By <span>James West</span>  |  May 23, 2022 </p>
                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu<br />fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <button className="yellow-button">{"Read More >"}</button>
            </div>
        </section>
    )
}
