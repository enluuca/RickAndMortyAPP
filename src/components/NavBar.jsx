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
                <Link to="/characters" className="link">Characters</Link>
                <Link to="/locations" className="link">Location</Link>
                <Link to="/episodes" className="link">Episode</Link>
            </div>

        </nav>
    );
};