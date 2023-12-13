import React from "react";

export default function Pagination({ prev, next, onPrevPage, onNextPage }) {
  const prevPage = () => {
    onPrevPage();
  };

  const nextPage = () => {
    onNextPage();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={prevPage}>
              Prev
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
