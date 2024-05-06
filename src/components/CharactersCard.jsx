import { Link } from "react-router-dom"


export const CharactersCard = ({ characterMap }) => {
    
    return (
        <li>
            <Link to= {`/character/${characterMap.id}`}> 
            <img src={characterMap.image} alt="" />
            <h1>{characterMap.name}</h1>
            <p>{characterMap.id}</p>
            </Link> 

        </li>
    )
}