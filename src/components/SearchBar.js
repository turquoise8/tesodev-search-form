import React, { useRef } from "react";
import { useGlobalContext } from "../context";

export const SearchBar = () => {
  const searchValue = useRef("");
  const { setSearchTerm, searchedPeople, setCurrentPage } = useGlobalContext();

  const searchPerson = () => {
    setSearchTerm(searchValue.current.value);
    window.sessionStorage.setItem("search", searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPerson();
    setCurrentPage(1);
  };

  return (
    <form action="submit" className="searchBar" onSubmit={handleSubmit}>
      <input
        className={searchedPeople.length < 1 ? "error" : ""}
        type="text"
        placeholder="Enter Search Term..."
        ref={searchValue}
      />
      <button>Search</button>
    </form>
  );
};
