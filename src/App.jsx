import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DetailsCharacters } from "./pages/DetailsCharacters"
import { Characters } from "./components/Characters1"
import { NavBar } from "./components/NavBar"

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Link to="/">{<NavBar/>}
        </Link>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<DetailsCharacters />} />
        </Routes>
      </BrowserRouter>
      </>
    
  )
}