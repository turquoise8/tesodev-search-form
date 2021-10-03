import React from "react";
import logo from "./tesodev.png";

export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <img src={logo} alt="tesodev" />
        <p>Search Web App</p>
      </div>
      <button className="addRecordBtn">
        <a href="/add">Add New Record</a>
      </button>
    </div>
  );
};
