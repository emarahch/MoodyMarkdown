// https://www.codevertiser.com/reactjs-responsive-navbar/

import { useState, Button } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./darkModeToggle";
// import addNoteButton from './addNote';
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [addNotelist, setNoteList] = useState(0);
  const notes = [];

  // const handleShowNavbar = () => {
  //   setShowNavbar(!showNavbar);
  // };


  const ParentComponent = ({ notes, incrementCount }) => {
    return (
      <>
        <button onClick={incrementCount}>Add another component</button>
        <div>{notes}</div>
        
      </>
    );
  };
  
  const ChildComponent = () => {
    return <h4>This is a child component</h4>;
  };



  

  // Function to increment count by 1
  const incrementCount = () => {
    setNoteList(addNotelist+1);
   
  };










  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"></div>
        <div className="nav-elements">
          <ul>
            <li>
              <button type="button">Back</button>
            </li>
            <li>
              <DarkModeToggle />
            </li>
            <li>
              <NavLink to="/">Sound</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <div className="Notes">
                {/* {addNotelist} */}
                
                <ParentComponent addComponent={incrementCount}></ParentComponent>
                
                {/* <button onClick={incrementCount} type="button">
                  Add note
                </button> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
