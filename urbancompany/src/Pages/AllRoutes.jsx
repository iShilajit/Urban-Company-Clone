import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/shilajit/Footer'

import Home from './shilajit/Home'
import AllServices from './Rabi/AllServices'
const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allservices" element={<AllServices/>}/>
            <Route path="/login" element={<Home/>}/>
            <Route path="/signup" element={<Home/>}/>
            <Route path="/blog" element={<Home/>}/>
            <Route path="/about" element={<Home/>}/>
           
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes