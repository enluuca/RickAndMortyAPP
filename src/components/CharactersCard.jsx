import { Link } from "react-router-dom"
import "../style/CharactersCard.css"

export const CharactersCard = ({ characterMap }) => {
    
    return (
        
        <Link to={`/character/${characterMap.id}`}>
            <div className="container">
            <img src={characterMap.image} alt=""  className="ImgCharacter"/>
            <h1 className="NameCharacter">{characterMap.name}</h1>
            <p className="StatusCharacter">{characterMap.status}</p>
            </div>
            </Link> 

        
    )
}