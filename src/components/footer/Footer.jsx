import React from 'react'
import "./Footer.css"
import logo from "./../../img/logo.svg"
import facebook from "./../../img/facebook.svg"
import instagram from "./../../img/instagram.svg"
import linkedin from "./../../img/linkedin.svg"
import twitter from "./../../img/twitter.svg"
export default function Footer() {
  return (
    <footer>
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
          </div>
        </div>
        <div className="box">
          <div className="title">Subscribe to our news letter to get<br />latest updates and news</div>
          <div className='input-form'>
            <input type="text" placeholder='Enter Your Email' className='input' />
            <button className='yellow-button'>Subscribe</button>
          </div>
        </div>
        <div className="end-side">
          <div className="items">
            <div className="text">
              <p className='desc'>Finstreet 118 2561 Fintown</p>
              <p className='desc'>Hello@finsweet.com  020 7993 2905</p>
              <p className='desc'>Developed by uzbedev</p>
            </div>
            <div className="social">
              <a href="#"><img src={facebook} alt="facebook" /></a>
              <a href="#"><img src={twitter} alt="twitter" /></a>
              <a href="#"><img src={instagram} alt="instagram" /></a>
              <a href="#"><img src={linkedin} alt="linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
