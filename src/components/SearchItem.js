import React from "react";

export const SearchItem = ({ email, name, date, city, country }) => {
  return (
    <>
      <article className="searchItem">
        <div className="searchItemInfo">
          <h3>
            {country}
            &nbsp;- &nbsp;{city}
          </h3>
          <p>
            {name} - {date}
          </p>
        </div>
        <div className="searchItemMail">
          <h3>{email}</h3>
        </div>
      </article>
      <hr className="break" />
    </>
  );
};
