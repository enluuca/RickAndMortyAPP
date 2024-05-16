import React, { useState } from "react";
import "../style/Characters1.css";

export const NameFilter = ({ onFilterChange }) => {
    const [filterValue, setFilterValue] = useState("");

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilterValue(value);
        onFilterChange(value);
    };

    return (
        <div className="nameFilter">
            <input className="nameFilter-input"
                type="text"
                placeholder="Filter by name..."
                value={filterValue}
                onChange={handleFilterChange}
            />
        </div>
    );
};
