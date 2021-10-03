import React from "react";
import { useGlobalContext } from "../context";

export const Pagination = () => {
  const { paginate, searchedPeople, currentPage, setCurrentPage } =
    useGlobalContext();

  const numberOfPages = searchedPeople.length
    ? parseInt(searchedPeople.length / 6) + 1
    : 1;

  let pageArray = Array.from(Array(numberOfPages).keys());

  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <button
          className="pageChange"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
      ) : (
        <button className="pageChange disabled">Previous</button>
      )}

      {pageArray.map((page) => (
        <button
          key={page + 1}
          className={`pageButton ${
            currentPage === page + 1 ? "selectedPage" : ""
          }`}
          onClick={() => paginate(page + 1)}
        >
          {page + 1}
        </button>
      ))}
      {currentPage < pageArray.length ? (
        <button
          className="pageChange"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      ) : (
        <button className="pageChange disabled">Next</button>
      )}
    </div>
  );
};
