import { Link } from "react-router-dom"
<<<<<<< HEAD
import "../style/CharactersCard.css"
=======

>>>>>>> 3a43b6fc6e4f94001592d96706323ac2793efeeb

export const CharactersCard = ({ characterMap }) => {
    
    return (
        
<<<<<<< HEAD
        <Link to={`/character/${characterMap.id}`}>
            <div className="container">
            <img src={characterMap.image} alt=""  className="ImgCharacter"/>
            <h1 className="NameCharacter">{characterMap.name}</h1>
            <p className="StatusCharacter">{characterMap.status}</p>
            </div>
=======
            <Link to= {`/character/${characterMap.id}`}> 
            <img src={characterMap.image} alt="" />
            <h1>{characterMap.name}</h1>
            <p>{characterMap.id}</p>
            <p>{characterMap.status}</p>
>>>>>>> 3a43b6fc6e4f94001592d96706323ac2793efeeb
            </Link> 

        
    )
}