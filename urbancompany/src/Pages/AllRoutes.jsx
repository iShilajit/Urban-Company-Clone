import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/shilajit/Footer'

import Home from './shilajit/Home'
import AllServices from './Rabi/AllServices'
import Final from './Taruna/Final'
import About from './shilajit/About'
const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allservices" element={<AllServices/>}/>
            <Route path="/login" element={<Home/>}/>
            <Route path="/signup" element={<Home/>}/>
            <Route path="/blog" element={<Final/>}/>
            <Route path="/about" element={<About/>}/>
           
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes