import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { Pagination } from "./Pagination";
import { SearchItem } from "./SearchItem";
import _, { sortBy } from "lodash";
import { useState } from "react";
import { SearchBy } from "./SearchBy";

export const SearchResultsMore = () => {
  const [sortTerm, setSortTerm] = useState("Name ascending");

  const {
    searchedPeople,
    currentPeople,
    setSearchedPeople,
    setSearchTerm,
    searchTerm,
    setSearchBy,
  } = useGlobalContext();

  useEffect(() => {
    if (searchTerm) {
      return;
    } else {
      setSearchTerm("");
    }
  }, []);

  useEffect(() => {
    setSearchBy(localStorage.getItem("searchBy"));
  });

  const showModal = () => {
    const boxVisibility =
      document.getElementsByClassName("orderBox")[0].style.visibility;

    if (boxVisibility === "hidden") {
      document.getElementsByClassName("orderBox")[0].style.visibility =
        "visible";
    } else {
      document.getElementsByClassName("orderBox")[0].style.visibility =
        "hidden";
    }
  };

  const sortBy = (sortType) => {
    switch (sortType) {
      case `nameAscending`:
        setSearchedPeople(_.sortBy(searchedPeople, ["name"]));
        setSortTerm("Name ascending");
        break;
      case "nameDescending":
        setSearchedPeople(_.sortBy(searchedPeople, ["name"]).reverse());
        setSortTerm("Name descending");
        break;
      case "dateAscending":
        setSearchedPeople(_.sortBy(searchedPeople, ["date"]));
        setSortTerm("Date ascending");
        break;
      case "dateDescending":
        setSearchedPeople(_.sortBy(searchedPeople, ["date"]).reverse());
        setSortTerm("Date descending");
        break;
      default:
        setSearchedPeople(_.sortBy(searchedPeople, ["name"]));
    }
  };

  return (
    <div className="searchResultsMoreContainer">
      {searchedPeople.length > 0 ? (
        <>
          <div className="topBar">
            <SearchBy />
            <div>
              <div className="order" onClick={showModal}>
                <p className="orderBy">
                  ⬇⬆ Order By{" "}
                  {sortTerm && (
                    <span style={{ fontWeight: "400" }}>: {sortTerm}</span>
                  )}
                </p>
                <div className="orderBox" style={{ visibility: "hidden" }}>
                  <button
                    className="sortBtn"
                    onClick={() => sortBy(`nameAscending`)}
                  >
                    Name ascending
                  </button>
                  <button
                    className="sortBtn"
                    onClick={() => sortBy("nameDescending")}
                  >
                    Name descending
                  </button>
                  <button
                    className="sortBtn"
                    onClick={() => sortBy("dateAscending")}
                  >
                    Date ascending
                  </button>
                  <button
                    className="sortBtn"
                    onClick={() => sortBy("dateDescending")}
                  >
                    Date descending
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="searchResultsMore">
            {currentPeople.map((person, index) => {
              return <SearchItem key={index} {...person} />;
            })}
          </section>
          <Pagination />
        </>
      ) : (
        <div>
          <div className="topBar">
            <SearchBy />
            <div>
              <div className="order" onClick={showModal}>
                <p className="orderBy">
                  ⬇⬆ Order By{" "}
                  {sortTerm && (
                    <span style={{ fontWeight: "400" }}>: {sortTerm}</span>
                  )}
                </p>
                <div className="orderBox" style={{ visibility: "hidden" }}>
                  <button
                    className="sortBtn"
                    onClick={() => sortBy(`nameAscending`)}
                  >
                    Name ascending
                  </button>
                  <button
                    className="sortBtn"
                    onClick={() => sortBy("nameDescending")}
                  >
                    Name descending
                  </button>
                  <button
                    className="sortBtn"
                    onClick={() => sortBy("dateAscending")}
                  >
                    Date ascending
                  </button>
                  <button
                    className="sortBtn"
                    onClick={() => sortBy("dateDescending")}
                  >
                    Date descending
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p>No person to display</p>
        </div>
      )}
    </div>
  );
};
