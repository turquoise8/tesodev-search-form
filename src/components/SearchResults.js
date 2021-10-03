import React from "react";
import { useGlobalContext } from "../context";
import { SearchItem } from "./SearchItem";

export const SearchResults = () => {
  const { searchedPeople } = useGlobalContext();

  return (
    <div className="searchResultsContainer">
      {searchedPeople.length > 0 ? (
        <section className="searchResults">
          {searchedPeople.slice(0, 3).map((person, index) => {
            return <SearchItem key={index} {...person} />;
          })}
          <a href="/search">
            <button>Show More...</button>
          </a>
        </section>
      ) : (
        <p>No Person To Display.</p>
      )}
    </div>
  );
};
