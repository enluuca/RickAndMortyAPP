import React, { useState } from "react";
<<<<<<< HEAD
import "../style/CharactersCard.css"
=======
>>>>>>> 3a43b6fc6e4f94001592d96706323ac2793efeeb

const FavoriteButton = ({ characterId, onFavoriteToggle }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        onFavoriteToggle(characterId);
    };

    return (
<<<<<<< HEAD
        <button onClick={toggleFavorite} className="FavoriteButton">
            {isFavorite ? "⭐" : "★"}
=======
        <button onClick={toggleFavorite}>
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
>>>>>>> 3a43b6fc6e4f94001592d96706323ac2793efeeb
        </button>
    );
};

export default FavoriteButton;
