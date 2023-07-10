// https://www.codevertiser.com/reactjs-responsive-navbar/
// https://stackoverflow.com/questions/74363737/how-to-create-a-list-by-getting-the-ids-of-specific-elements-in-react
// https://reactrouter.com/en/main/start/tutorial

import { useState, Button } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./darkModeToggle";
// import addNoteButton from './addNote';
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [addNotelist, setNoteList] = useState([]);

  const handleAddNote = () => {
    const newNote = Date.now()
    setNoteList(v => [...v, newNote])
  }

  function Notey() {
    return <div>Note</div>
  }

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
              <li> <NavLink to="/{meow.id}"> {addNotelist.map((meow) => <Notey />)}</NavLink></li>
              </div>
              <button onClick={handleAddNote}>New note</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
