import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="ruta_de_la_imagen" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/ubications">Ubication</Link>
                </li>
                <li>
                    <Link to="/episodes">Episode</Link>
                </li>
            </ul>
        </nav>
    );
};

