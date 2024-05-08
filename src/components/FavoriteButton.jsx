import React, { useState } from "react";

const FavoriteButton = ({ characterId, onFavoriteToggle }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        onFavoriteToggle(characterId);
    };

    return (
        <button onClick={toggleFavorite}>
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
    );
};

export default FavoriteButton;
