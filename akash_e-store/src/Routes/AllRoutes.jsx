import React from 'react'
import { Routes } from 'react-router-dom'
import Home from './Home'
import InitialFocus from './login'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<InitialFocus />}></Route>
    </Routes>
  )
}

export default AllRoutes