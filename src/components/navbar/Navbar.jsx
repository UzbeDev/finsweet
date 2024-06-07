import React from 'react'
import "./Navbar.css"
import logo from "./../../img/logo.svg"
export default function Navbar() {
    return (
        <nav>
            <div className="container">

                <div className="nav-items">
                    <img src={logo} alt="logo" />
                    <div className="links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                        <button className="white-button">Subscribe</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
