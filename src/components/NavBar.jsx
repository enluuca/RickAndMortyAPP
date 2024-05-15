import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css"

export const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <img src="/src/assets/RyM.png" alt="asd" className="logo-img"/>
            </div>
            <div className="nav-links">
                <Link to="/characters" className="link">CHARACTERS</Link>
                <Link to="/locations" className="link">LOCATION</Link>
                <Link to="/episodes" className="link">EPISODE</Link>
            </div>

        </nav>
    );
};