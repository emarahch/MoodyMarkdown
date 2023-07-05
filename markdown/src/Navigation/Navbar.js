// https://www.codevertiser.com/reactjs-responsive-navbar/

import { useState, Button } from 'react'
import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
        <div className="container">
          <div className="logo">
          </div>
          <div className="nav-elements">
            <ul>
            <li>
              <button type="button">Back</button>
              </li>
              <li>
              <button type="button">Theme</button>
              </li>
              <li>
                <NavLink to="/">Sound</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
              <button type="button">Add note</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
}
export default Navbar