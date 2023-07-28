import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Errorpage from './Components/Errorpage'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  )
}

export default App