import React, { useEffect, useState } from "react";
import SearchField from "./searchField";
import { API } from "../../API/api";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchResultByName,
  getSearchResultByPerson,
  setSearchSwitch,
  requestSearchedresults,
} from "../../search/redux/actions";

const SearchFieldContainer = () => {
  const searchSwitch = useSelector(state=> state.searchedItems.switcher)
  const dispatch = useDispatch()
  const { values: inputSearchValue, handleChange, handleSubmit } = useFormik({
    initialValues: {
      mainSearchForm: "",
    },
    onSubmit: (values, onSubmitProps) => {
      onSubmitProps.resetForm();
      searchApiSwitcher();
    },
  });
  const searchApiSwitcher = () => {
    if (searchSwitch) {
      dispatch(requestSearchedresults(inputSearchValue));
      API.fetchSearchedItemsByTitle(inputSearchValue).then((data) =>
      dispatch(getSearchResultByName(data))
      );
    } else {
      dispatch(requestSearchedresults(inputSearchValue));
      API.fetchSearchedItemsByPerson(inputSearchValue).then((data) =>
      dispatch(getSearchResultByPerson(data))
      );
    }
  };
  useEffect(() => {
    inputSearchValue.mainSearchForm && searchApiSwitcher();
  }, [inputSearchValue.mainSearchForm]);

  return (
    <SearchField
      searchSwitch={searchSwitch}
      dispatch={dispatch}
      setSearchSwitch={setSearchSwitch}
      handleChange={handleChange}
      inputSearchValue={inputSearchValue}
      handleSubmit={handleSubmit}
    />
  );
};



export default SearchFieldContainer;
