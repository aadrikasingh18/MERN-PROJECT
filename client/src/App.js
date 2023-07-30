import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Logout from './Components/Logout'
import Errorpage from './Components/Errorpage'
const App = () => {
  return (
    <>

      {/* <UserContext.Provider> */}

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>

      {/* </UserContext.Provider> */}
    </>
  )
}


//context api
// export const UserContext = createContext();
export default App