import React, { useEffect } from "react";
import SearchField from "./searchField";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchSwitch,
  requestSearchedresults,
} from "../../redux/search/actions";

const SearchFieldContainer = () => {
  const searchSwitch = useSelector((state) => state.searchedItems.switcher);
  const dispatch = useDispatch();
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
      dispatch(requestSearchedresults(inputSearchValue.mainSearchForm));
    } else {
      dispatch(requestSearchedresults(inputSearchValue.mainSearchForm));
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
