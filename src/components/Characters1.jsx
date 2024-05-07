import { CharactersCard } from "./CharactersCard";
import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";
import { NameFilter } from "./NameFilter";
import "../style/Characters1.css";

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nameFilter, setNameFilter] = useState("");

    useEffect(() => {
        get(`/character?page=${currentPage}&name=${nameFilter}`)
            .then((data) => {
                console.log(data.results);
                setCharacters(data.results);
            })
            .catch((error) => {
                console.error("Error fetching characters:", error);
            });
    }, [currentPage, nameFilter]);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleFilterChange = (value) => {
        setNameFilter(value);
    };

    return (
        <>
            <NameFilter onFilterChange={handleFilterChange} />
            <div className="pagination">
                <button onClick={previousPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>
            <ul className="characters">
                {characters.map((character) => (
                    <CharactersCard key={character.id} characterMap={character} />
                ))}
            </ul>
        </>
    );
};