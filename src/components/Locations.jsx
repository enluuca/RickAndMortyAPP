import React, { useState, useEffect } from "react";
import { get } from "../utils/conexionAPI";
import { NameFilter } from "./NameFilter";
import { Pagination } from "./Pagination";
import "../style/Episodes-Locations.css"


export const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [nameFilter, setNameFilter] = useState("");

    useEffect(() => {
        fetchData();
    }, [currentPage, nameFilter]);

    const fetchData = () => {
        let apiUrl = `/location/?page=${currentPage}`;


        get(apiUrl)
            .then((data) => {
                console.log(data.results);
               setLocations(data.results);
                setTotalPages(data.info.pages);
            })
            .catch((error) => {
                console.error("Error fetching locations:", error);
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
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
            />
            <div className="contenedor">
                <ul>
                
                {locations.map((location) => (
                    <li key={location.id} className="episodes">
                        <h1 className="EpisodeName">{location.name}</h1>
                </li>
                ))}
                    
                </ul> 
            </div>
        </>
    );
};