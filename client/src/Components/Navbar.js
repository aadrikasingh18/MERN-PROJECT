import React from 'react'
import logo from "../img/logo.jpg"
import './Navbar.css'
// import ke sath jo logo likha hai vha pr logo1/2 ya kuch bhi naam likh skte but jo path hai vha pr original naam hona chahiyeh

import { NavLink } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.css';
// Navlink krne se uprjo show ho rha tha ki page refresh ho rha voh hona band hogya hai 
// anchor tag a ki jaga NavLink and href ki jaga 'to' likha hai
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="image">
                        <NavLink className="navbar-brand" to="#">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* ml-auto => left, ms-auto => right (STACKOVERFLOW)*/}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">CONTACT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login">LOGIN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Register">REGISTER</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar