import React from "react";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsMore } from "../components/SearchResultsMore";
import logo from "../components/tesodev.png";

export const SearchPage = () => {
  return (
    <>
      <nav className="searchNav">
        <a href="/">
          <img src={logo} alt="tesodev" />
        </a>
        <SearchBar />
        <button className="addRecordBtn">
          <a href="/add">Add New Record</a>
        </button>
      </nav>
      <SearchResultsMore />
    </>
  );
};
