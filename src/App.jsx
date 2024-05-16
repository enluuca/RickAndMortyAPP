import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { DetailsCharacters } from './pages/DetailsCharacters';
import { Characters } from './components/Characters1';
import { Locations } from './components/Locations';
import { Episodes } from './components/Episode';
import { NavBar } from './components/NavBar';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/"><NavBar /></Link>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/character/:characterId" element={<DetailsCharacters />} />
        </Routes>
        <footer>
          <p>Síguenos en LinkedIn:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/ifinacho/"><i className="fa-brands fa-linkedin"></i> Ignacio Francisco Ibañez</a></li>
            <li><a href="https://ar.linkedin.com/in/enzo-lucas-giangreco-80455b21b"><i className="fab fa-linkedin"></i> Enzo Lucas Giangreco</a></li>
            <li><a href="hhttps://www.linkedin.com/in/sofia-landaveri/?originalSubdomain=ar"><i className="fab fa-linkedin"></i> Sofia Landaveri</a></li>
            <li><a href="https://www.linkedin.com/in/ana-bel%C3%A9n-sanchez-aa66a5139"><i className="fab fa-linkedin"></i> Ana Belén Sanchez</a></li>
          </ul>
        </footer>
      </BrowserRouter>
    </>
  );
};
