import React from "react";
import "../style/Characters1.css";

export const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
    return (
        <div className="pagination">
            <button className="pagination-btn"onClick={onPreviousPage} disabled={currentPage === 1}>
                {String.fromCharCode(60)}
            </button>
            <span className="pagination-nun">{currentPage} / {totalPages}</span>
            <button className="pagination-btn"onClick={onNextPage} disabled={currentPage === totalPages}>
                {String.fromCharCode(62)}
            </button>
        </div>
    );
};

