import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PostItems from '../Components/PostItems'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}  />
            <Route path='/products' element={<Products/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/post' element={<PostItems/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes