import React, { useState } from "react";
import "../style/CharactersCard.css"

const FavoriteButton = ({ characterId, onFavoriteToggle }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        onFavoriteToggle(characterId);
    };

    return (
        <button onClick={toggleFavorite} className="FavoriteButton">
            {isFavorite ? "⭐" : "★"}
        </button>
    );
};

export default FavoriteButton;
