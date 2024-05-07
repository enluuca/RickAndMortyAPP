import React, { useState } from "react";

export const NameFilter = ({ onFilterChange }) => {
    const [filterValue, setFilterValue] = useState("");

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilterValue(value);
        onFilterChange(value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by name..."
                value={filterValue}
                onChange={handleFilterChange}
            />
        </div>
    );
};
