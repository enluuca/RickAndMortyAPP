import React from "react";
import "../style/Characters1.css";

export const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
    return (
        <div className="pagination">
            <button className="pagination"onClick={onPreviousPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span className="pagination">{currentPage} / {totalPages}</span>
            <button className="pagination"onClick={onNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

