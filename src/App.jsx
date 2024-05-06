import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DetailsCharacters } from "./pages/DetailsCharacters"
import { Characters } from "./components/Characters1"

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Link to="/"> <h1>Rick And Morty App</h1>
        </Link>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<DetailsCharacters/>} />
        </Routes>
      </BrowserRouter>
      </>
    
  )
}