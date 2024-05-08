import React from "react";

export const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
    return (
        <div className="pagination">
            <button onClick={onPreviousPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={onNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

