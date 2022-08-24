import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/shilajit/Footer'
import Navbar from '../Components/shilajit/Navbar'
import Home from './shilajit/Home'

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>

           
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes