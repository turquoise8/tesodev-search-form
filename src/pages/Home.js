import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { SearchBy } from "../components/SearchBy";
import { SearchResults } from "../components/SearchResults";
import { useGlobalContext } from "../context";

export const Home = () => {
  const { setSearchTerm } = useGlobalContext();

  useEffect(() => {
    setSearchTerm("");
    localStorage.setItem("searchBy", "firstName");
  }, [setSearchTerm]);

  return (
    <main className="home">
      <Header />
      <SearchBy />
      <SearchBar />
      <SearchResults />
    </main>
  );
};
