import React from "react";
import "../style/Characters1.css";

export const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
    return (
        <div className="pagination">
<<<<<<< HEAD
            <button className="pagination-btn"onClick={onPreviousPage} disabled={currentPage === 1}>
                {String.fromCharCode(60)}
            </button>
            <span className="pagination-nun">{currentPage} / {totalPages}</span>
            <button className="pagination-btn"onClick={onNextPage} disabled={currentPage === totalPages}>
                {String.fromCharCode(62)}
=======
            <button className="pagination"onClick={onPreviousPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span className="pagination">{currentPage} / {totalPages}</span>
            <button className="pagination"onClick={onNextPage} disabled={currentPage === totalPages}>
                Next
>>>>>>> 3a43b6fc6e4f94001592d96706323ac2793efeeb
            </button>
        </div>
    );
};

