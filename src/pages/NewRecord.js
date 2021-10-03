import React, { useRef, useState } from "react";
import { useEffect } from "react";
import logo from "../components/tesodev.png";
import { useGlobalContext } from "../context";

export const NewRecord = () => {
  const [error, setError] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const { updatedData, setUpdatedData, setSearchTerm } = useGlobalContext();
  const [unclickable, setUnclickable] = useState(true);

  useEffect(() => {
    setSearchTerm("");
  });

  const mail = useRef();
  const nameSurname = useRef();
  const country = useRef();
  const city = useRef();

  const checkClickable = () => {
    setError(false);
    if (
      nameSurname.current.value &&
      mail.current.value &&
      country.current.value &&
      city.current.value
    ) {
      setUnclickable(false);
    } else {
      setUnclickable(true);
    }
  };

  const handleSubmit = (e) => {
    setError(false);
    setSuccessful(false);
    e.preventDefault();

    const newPerson = [
      nameSurname.current.value,
      "",
      mail.current.value,
      String(new Date().getFullYear()),
      country.current.value,
      city.current.value,
    ];

    const validateName = (name) => {
      const re = /^[a-zA-Z]+ [a-zA-Z]+$/;
      return re.test(name);
    };

    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    const validateCountry = (country) => {
      const re = /^[A-Z]+$/i;
      return re.test(country);
    };

    const validateCity = (city) => {
      const re = /^[A-Z]+$/i;
      return re.test(city);
    };

    if (
      validateName(nameSurname.current.value) &&
      validateEmail(mail.current.value) &&
      validateCountry(country.current.value) &&
      validateCity(city.current.value)
    ) {
      setUpdatedData([...updatedData, newPerson]);
      localStorage.setItem("data", JSON.stringify([...updatedData, newPerson]));
      setSuccessful(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="newRecord">
      <nav className="searchNav">
        <a href="/">
          <img src={logo} alt="tesodev" />
        </a>
        <h2>
          <a href="/search">⬅ Return to List Page</a>
        </h2>
      </nav>
      <div className="addRecordContainer">
        <form action="" className="addRecord" onSubmit={handleSubmit}>
          <label className={error ? "error" : ""} htmlFor="">
            Name Surname
          </label>
          <input
            type="text"
            placeholder="Enter name and surname"
            ref={nameSurname}
            className={error ? "error" : ""}
            onChange={checkClickable}
          />
          <br />
          <span>❕ Be sure to add both a name and a surname </span>
          <span>❕ Do not use local characters </span>
          <label className={error ? "error" : ""} htmlFor="">
            Country
          </label>
          <input
            type="text"
            placeholder="Enter a country"
            ref={country}
            className={error ? "error" : ""}
            onChange={checkClickable}
          />
          <label className={error ? "error" : ""} htmlFor="">
            City
          </label>
          <input
            type="text"
            placeholder="Enter a city"
            ref={city}
            className={error ? "error" : ""}
            onChange={checkClickable}
          />
          <label className={error ? "error" : ""} htmlFor="">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter an e-mail (abc@xyz.com)"
            ref={mail}
            className={error ? "error" : ""}
            onChange={checkClickable}
          />
          <button className={unclickable && "unclickable"} type="submit">
            Add
          </button>
          {error && <h3>Please validate your info</h3>}
          {successful && (
            <h3 style={{ color: "green" }}>Person Added Successfully</h3>
          )}
        </form>
      </div>
    </div>
  );
};
