import React, { useState, useEffect } from "react";
import { CharactersCard } from "./CharactersCard";
import { get } from "../utils/conexionAPI";
import { NameFilter } from "./NameFilter";
import {Pagination} from "./Pagination";
import "../style/Characters1.css";

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [nameFilter, setNameFilter] = useState("");

    useEffect(() => {
        fetchData();
    }, [currentPage, nameFilter]);

    const fetchData = () => {
        get(`/character?page=${currentPage}&name=${nameFilter}`)
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
        setCurrentPage(1); // Reset to first page when filter changes
    };

    return (
        <>
            <NameFilter onFilterChange={handleFilterChange} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
            />
            <ul className="characters">
                {characters.map((character) => (
                    <CharactersCard key={character.id} characterMap={character} />
                ))}
            </ul>
        </>
    );
};

export default Characters;
