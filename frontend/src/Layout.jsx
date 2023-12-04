import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Welcome from './Components/Pages/Welcome'
import Login from './Components/Pages/Login/Login'
import SignUp from './Components/Pages/Login/Signup'
import NotFound from './Components/Pages/NotFound'
import Navbar from './Components/shared/Navbar'
import Hompage from './Components/Pages/Hompage'

const Layout = () => {
  return (
    
       <>
        <Navbar/>
        <Routes> 
        <Route path="/"  element={<Welcome/>} />
        <Route path="/home"  element={<Hompage/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/signup"  element={<SignUp/>} />
        <Route path="*"  element={<NotFound/>} />
        </Routes>
        </>
 
  )
}

export default Layout
