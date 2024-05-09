import React, { useState } from "react";

const StatusFilter = ({ onStatusChange }) => {
    const [selectedStatus, setSelectedStatus] = useState("");

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
        onStatusChange(status);
    };

    return (
        <div className="status-filter">
            <span>Status Filter:</span>
            <button onClick={() => handleStatusChange("")}>All</button>
            <button onClick={() => handleStatusChange("alive")}>Alive</button>
            <button onClick={() => handleStatusChange("dead")}>Dead</button>
            <button onClick={() => handleStatusChange("unknown")}>Unknown</button>
        </div>
    );
};

export default StatusFilter;
