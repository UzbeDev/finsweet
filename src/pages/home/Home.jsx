import React from 'react'
import Intro from './../../components/intro/Intro'
import Post from './../../components/post/Post'
import About from './../../components/about/About'
import Started from './../../components/started/Started'
import Author from './../../components/author/Author'
import Test from './../../components/test/Test'
export default function Home() {
    return (
        <>
            <Intro />
            <Post />
            <About />
            <Started />
            <Author />
            <Test />
        </>
    )
}
