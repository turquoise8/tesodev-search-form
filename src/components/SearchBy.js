import React from "react";
import { useGlobalContext } from "../context";

export const SearchBy = () => {
  const { setSearchBy, setCurrentPage } = useGlobalContext();

  return (
    <form action="" className="searchBy">
      Search by :
      <label htmlFor="">
        <input
          type="radio"
          value="firstName"
          name="radio"
          defaultChecked
          onClick={() => {
            setSearchBy("firstName");
            window.localStorage.setItem("searchBy", "firstName");
            setCurrentPage(1);
          }}
        />
        First Name
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="surname"
          name="radio"
          onClick={() => {
            setSearchBy("surname");
            window.localStorage.setItem("searchBy", "surname");
            setCurrentPage(1);
          }}
        />
        Surname
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="email"
          name="radio"
          onClick={() => {
            setSearchBy("email");
            window.localStorage.setItem("searchBy", "email");
            setCurrentPage(1);
          }}
        />
        E-mail
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="country"
          name="radio"
          onClick={() => {
            setSearchBy("country");
            window.localStorage.setItem("searchBy", "country");
            setCurrentPage(1);
          }}
        />
        Country
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="city"
          name="radio"
          onClick={() => {
            setSearchBy("city");
            window.localStorage.setItem("searchBy", "city");
            setCurrentPage(1);
          }}
        />
        City
      </label>
    </form>
  );
};
