import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css"
import icon from '/src/assets/icon2.png';

export const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <img src={icon}alt="Rick and Morty Logo" title="Rick and Morty Logo" className="logo-img"/>
            </div>
            <div className="nav-links">
                <Link to="/characters" className="link">CHARACTERS</Link>
                <Link to="/locations" className="link">LOCATION</Link>
                <Link to="/episodes" className="link">EPISODE</Link>
            </div>

        </nav>
    );
};