import React, { ChangeEvent, useState } from "react";
import { Logo } from "../logo/logo";
import { setSearchSwitch } from "../../redux/search/actions";
import { useDispatch } from "react-redux";

type inputSearchValueType = {
  mainSearchForm: string;
};

type PropsTypes = {
  handleChange: (e: ChangeEvent<any>) => void;
  inputSearchValue: inputSearchValueType;
  handleSubmit: () => void;
  searchSwitch: boolean;
};

export const SearchField: React.FC<PropsTypes> = ({
  handleChange,
  inputSearchValue,
  handleSubmit,
  searchSwitch,
}) => {
  const dispatch = useDispatch();
  const sortbyTitle = () => {
    dispatch(setSearchSwitch(true));
  };
  const sortbyPerson = () => {
    dispatch(setSearchSwitch(false));
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