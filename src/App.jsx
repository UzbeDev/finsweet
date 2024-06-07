import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import PostInfo from "./pages/blog/postInfo/PostInfo"
import NotFound from "./pages/404/NotFound"
import About from './pages/about/About'
import Business from './pages/business/Business'
import Author  from './pages/author/Author'
import Contact from "./pages/contact/Contact"
export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/post-info' element={<PostInfo />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/category' element={<Business />} />
          <Route path='/author' element={<Author />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
