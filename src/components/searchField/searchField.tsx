/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Logo } from "../logo/logo";
import { setSearchSwitch } from "../../redux/search/actions";
import styles from "../../styles/main.module.scss";

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
    <form className={styles.searchField} onSubmit={handleSubmit}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.searchAnotation}>FIND YOUR MOVIE</div>
      <input
        type="text"
        placeholder="Search..."
        value={inputSearchValue.mainSearchForm}
        onChange={handleChange}
        name="mainSearchForm"
      />
      <div className={styles.searchPanel}>
        <div className={styles.sortByGroupeButtons}>
          <div className={styles.searchBy}>SEARCH BY</div>
          <div
            onClick={sortbyTitle}
            className={
              searchSwitch
                ? styles.sortByTitleButtonChosed
                : styles.sortByTitleButton
            }
          >
            TITLE
          </div>
          <div
            onClick={sortbyPerson}
            className={
              searchSwitch
                ? styles.sortByDirectorButton
                : styles.sortByDirectorButtonChosed
            }
          >
            DIRECTOR
          </div>
        </div>
        <button type="submit" className={styles.searchButton}>
          SEARCH
        </button>
      </div>
    </form>
  );
};
