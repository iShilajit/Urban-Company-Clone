import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/shilajit/Footer'

import Home from './shilajit/Home'
import AllServices from './Rabi/AllServices'
import Final from './Taruna/Final'
import About from './shilajit/About'
import Signin from './shubham/LoginSignin/Signin'

import SingleService from './shilajit/SingleService'
import Haircare from './Taruna/Haircare'

import Summary from './Taruna/Summary'
import { Secpay } from './shubham/Sec_payment'

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allservices" element={<AllServices/>}/>

            <Route path="/login" element={<Signin/>}/>
            <Route path="/signup" element={<Home/>}/>

            <Route path="/login" element={<Home/>}/>
            <Route path="/signup" element={<Signin/>}/>

            <Route path="/blog" element={<Final/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<SingleService/>}/>
            <Route path="/haircare" element={<Haircare/>}/>
            <Route path="/cart" element={<Summary/>}/>
            <Route path="/payment" element={<Secpay/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes