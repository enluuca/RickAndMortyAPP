import React, { useState } from "react";
import "../style/Characters1.css";

const StatusFilter = ({ onStatusChange }) => {
    const [selectedStatus, setSelectedStatus] = useState("");

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
        onStatusChange(status);
    };

    return (
        <div className="status-filter">
            <span>Status Filter:</span>
<<<<<<< HEAD
            <button className="status-filter-btn" onClick={() => handleStatusChange("")}>All</button>
            <button className="status-filter-btn" onClick={() => handleStatusChange("alive")}>Alive</button>
            <button className="status-filter-btn" onClick={() => handleStatusChange("dead")}>Dead</button>
            <button className="status-filter-btn" onClick={() => handleStatusChange("unknown")}>Unknown</button>
=======
            <button className="status-filter" onClick={() => handleStatusChange("")}>All</button>
            <button className="status-filter" onClick={() => handleStatusChange("alive")}>Alive</button>
            <button className="status-filter" onClick={() => handleStatusChange("dead")}>Dead</button>
            <button className="status-filter" onClick={() => handleStatusChange("unknown")}>Unknown</button>
>>>>>>> 3a43b6fc6e4f94001592d96706323ac2793efeeb
        </div>
    );
};

export default StatusFilter;
