import React from 'react'
import "./Contact.css"
export default function Contact() {
    return (
        <section className='contact-page'>
            <div className="container">
                <div className="intro">
                    <p className="mini-text"><b>contact us</b></p>
                    <p className="title">Let’s Start a Conversation</p>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                </div>
                <div className="main">
                    <div className="box">
                        <div className="left">
                            <p className="mini-text">Working hours</p>
                            <hr />
                            <p className="title">Working hours</p>
                            <p className="title">9:00 AM to 8:00 PM</p>
                            <p className="desc">Our Support Team is available 24/7</p>
                        </div>
                        <div className="right">
                            <p className="mini-text">Contact Us</p>
                            <hr />
                            <p className="title">020 7993 2905</p>
                            <p className="desc">hello@finsweet.com</p>
                        </div>
                    </div>
                    <div className="form">
                        <input type="text" placeholder='Full Name' />
                        <input type="text" placeholder='Your Email' />
                        <select>
                            <option value="0" selected>Query Related</option>
                            <option value="1" >1</option>
                        </select>
                        <textarea placeholder='Message'></textarea>
                        <button className="yellow-button"><b>Send Message</b></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
