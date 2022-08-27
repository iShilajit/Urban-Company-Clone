import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/shilajit/Footer'

import Home from './shilajit/Home'
import AllServices from './Rabi/AllServices'
import Final from './Taruna/Final'
import About from './shilajit/About'
import Signin from './shubham/LoginSignin/Signin'
import SingleService from './shilajit/SingleService'
const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allservices" element={<AllServices/>}/>
            <Route path="/login" element={<Signin/>}/>
            <Route path="/signup" element={<Home/>}/>
            <Route path="/blog" element={<Final/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<SingleService/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
           
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes