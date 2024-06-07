import React from 'react'
import postCard from "./../../img/postCard.png"
import "./Post.css"
export default function Post() {
    return (
        <div className="container">
            <section className='post-section'>

                <div className="card-side">
                    <div className="title">Featured Post</div>
                    <div className="card">
                        <img src={postCard} alt="post card img" className='card-img' />
                        <p className="data">By <span>John Doe</span>   l   May 23, 2022</p>
                        <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor.</p>
                        <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore<br />eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <a href="/blog"><button className='yellow-button'>{"Read More >"}</button></a>
                    </div>
                </div>
                <div className="choose-side">
                    <p className="title">All Posts <a href="/blog">View All</a></p>
                    <div className="items">
                        <a href="/blog">
                            <div className="item">
                                <p className="data">By <span>John Deo</span>   l   Aug 23, 2021 </p>
                                <p className="title">8 Figma design systems that you can download for free today.</p>
                            </div>
                        </a>
                        <a href="/blog">
                            <div className="item">
                                <p className="data">By <span>John Deo</span>   l   Aug 23, 2021 </p>
                                <p className="title">8 Figma design systems that you can download for free today.</p>
                            </div>
                        </a>
                        <a href="/blog">
                            <div className="item">
                                <p className="data">By <span>John Deo</span>   l   Aug 23, 2021 </p>
                                <p className="title">8 Figma design systems that you can download for free today.</p>
                            </div>
                        </a>
                        <a href="/blog">
                            <div className="item">
                                <p className="data">By <span>John Deo</span>   l   Aug 23, 2021 </p>
                                <p className="title">8 Figma design systems that you can download for free today.</p>
                            </div>
                        </a>
                    </div>
                </div>

            </section>
        </div>
    )
}
