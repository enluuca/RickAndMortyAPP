import React, { useState, useEffect } from "react";
import { get } from "../utils/conexionAPI";
import { useParams, Link } from "react-router-dom";
import "../style/DetailsCharacters.css";

export const DetailsCharacters = () => {
    const [character, setCharacter] = useState(null);
    const { characterId } = useParams();

    useEffect(() => {
        get(`/character/${characterId}`).then((data) => {
            console.log(data);
            setCharacter(data);
        });
    }, [characterId]);

    if (!character) {
        return null;
    }

    return (
        <div className="detailsCharacters">
            <img className="detailsCharacter-img" src={character.image} alt="" />
            <div className="detailsCharacters-div">
                <h1 className="detailsCharacters-div_h1">{character.name}</h1>            
                <p className="detailsCharacters-div_p">Estado: {character.status}</p>
                <p className="detailsCharacters-div_p">Especie: {character.species}</p>
                <p className="detailsCharacters-div_p">Género: {character.gender}</p>
                <p className="detailsCharacters-div_p">Última ubicación conocida: {character.location.name}</p>
            </div>
        </div>
    );
};

export default DetailsCharacters;
