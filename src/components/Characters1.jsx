import React, { useState, useEffect } from "react";
import { CharactersCard } from "./CharactersCard";
import { get } from "../utils/conexionAPI";
import { NameFilter } from "./NameFilter";
import { Pagination } from "./Pagination";
import FavoriteButton from "./FavoriteButton";
import StatusFilter from "./StatusFilter"; // Importa el componente de filtro de estado
import "../style/Characters1.css";

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [nameFilter, setNameFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    useEffect(() => {
        fetchData();
    }, [currentPage, nameFilter, statusFilter]);

    const fetchData = () => {
        let apiUrl = `/character?page=${currentPage}&name=${nameFilter}`;
        if (statusFilter) {
            apiUrl += `&status=${statusFilter}`;
        }

        get(apiUrl)
            .then((data) => {
                console.log(data.results);
                setCharacters(data.results);
                setTotalPages(data.info.pages);
            })
            .catch((error) => {
                console.error("Error fetching characters:", error);
            });
    };

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
        setCurrentPage(1);
    };

    const handleStatusFilterChange = (status) => {
        setStatusFilter(status);
        setCurrentPage(1);
    };

    const handleFavoriteToggle = (characterId) => {
        console.log(`Toggle favorite for character with ID: ${characterId}`);
    };

    return (
        <>
            <NameFilter onFilterChange={handleFilterChange} />
            <StatusFilter onStatusChange={handleStatusFilterChange} /> {/* Usa el componente de filtro de estado */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
            />
            <ul className="characters">
                {characters.map((character) => (
                    <li key={character.id}>
                        <CharactersCard characterMap={character} />
                        <FavoriteButton
                            characterId={character.id}
                            onFavoriteToggle={handleFavoriteToggle}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};