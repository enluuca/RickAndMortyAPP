import React, { useState, useEffect } from "react";
import { get } from "../utils/conexionAPI";
import { useParams, Link } from "react-router-dom";

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
        <div>
            <img src={character.image} alt="" />
            <p>{character.name}</p>
            <p>{character.location.name}</p>
        </div>
    );
};

export default DetailsCharacters;
