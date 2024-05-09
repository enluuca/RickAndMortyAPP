import React, { useState, useEffect } from "react";
import { get } from "../utils/conexionAPI";
import { NameFilter } from "./NameFilter";
import { Pagination } from "./Pagination";

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [nameFilter, setNameFilter] = useState("");

    useEffect(() => {
        fetchData();
    }, [currentPage, nameFilter]);

    const fetchData = () => {
        let apiUrl = `/episode/?page=${currentPage}`;

        get(apiUrl)
            .then((data) => {
                console.log(data.results);
                setEpisodes(data.results);
                setTotalPages(data.info.pages);
            })
            .catch((error) => {
                console.error("Error fetching episodes:", error);
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



    return (
        <>
            <NameFilter onFilterChange={handleFilterChange} />
            
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
            />
            <ul className="episodes">
                {episodes.map((episode) => (
                    <li key={episode.id}>
                        <h1>{episode.name}</h1>
                    </li>
                ))}
            </ul> 
        </>
    );
};