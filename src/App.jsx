import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DetailsCharacters } from "./pages/DetailsCharacters"
import { Characters } from "./components/Characters1"
import { Locations } from "./components/Locations"
import { Episodes } from "./components/Episode"
import { NavBar } from "./components/NavBar"
import "./App.css"

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Link to="/">{<NavBar/>}
        </Link>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />

          <Route path="/character/:characterId" element={<DetailsCharacters />} />
        </Routes>
      </BrowserRouter>
      </>
    
  )
}