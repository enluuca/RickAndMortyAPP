import { CharactersCard} from "./CharactersCard"
import { get } from "../utils/conexionAPI"
import { useState, useEffect } from "react"
import "../style/Characters1.css"

export const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        get("/character").then((data) => {
            console.log(data.results);
            setCharacters(data.results)
        })
    }, [])

    return (
        <>
            <ul className="characters">
                {characters.map((character) =>
                    (<CharactersCard key={character.id} characterMap={character} />))}
                
            </ul>
        </>
    )
}