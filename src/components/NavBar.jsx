import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/src/assets/RyM.png" alt="asd" />
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/locations">Location</Link>
                </li>
                <li>
                    <Link to="/episodes">Episode</Link>
                </li>
            </ul>
        </nav>
    );
};

