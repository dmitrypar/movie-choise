import React, { useState } from "react";
import Logo from "../logo";

const SearchField = ({
  handleChange,
  inputSearchValue,
  handleSubmit,
  searchSwitch,
  setSearchSwitch,
}) => {
  const sortbyTitle = () => {
    setSearchSwitch(true);
  };
  const sortbyPerson = () => {
    setSearchSwitch(false);
  };
  return (
    <form className="searchField" onSubmit={handleSubmit}>
      <div className="logo">
        <Logo />
      </div>
      <div className="searchAnotation">FIND YOUR MOVIE</div>
      <input
        type="text"
        placeholder="Search..."
        value={inputSearchValue.mainSearchForm}
        onChange={handleChange}
        name="mainSearchForm"
      />
      <div className="searchPanel">
        <div className="sortByGroupeButtons">
          <div className="searchBy">SEARCH BY</div>
          <div
            onClick={sortbyTitle}
            className={
              searchSwitch ? "sortByTitleButtonChosed" : "sortByTitleButton"
            }
          >
            TITLE
          </div>
          <div
            onClick={sortbyPerson}
            className={
              searchSwitch
                ? "sortByDirectorButton"
                : "sortByDirectorButtonChosed"
            }
          >
            DIRECTOR
          </div>
        </div>
        <button type="submit" className="searchButton">
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default SearchField;
