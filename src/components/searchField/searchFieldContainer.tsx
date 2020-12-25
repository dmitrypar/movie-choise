import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { SearchField } from "./searchField";
import { requestSearchedresults } from "../../redux/search/actions";
import { switchResultByTitleOrPerson } from "../../redux/search/selectors";

export const SearchFieldContainer = () => {
  const searchSwitch = useSelector(switchResultByTitleOrPerson);
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
    dispatch(requestSearchedresults(inputSearchValue.mainSearchForm));
  };
  useEffect(() => {
    if (inputSearchValue.mainSearchForm) {
      searchApiSwitcher();
    }
  }, [inputSearchValue.mainSearchForm]);

  return (
    <SearchField
      searchSwitch={searchSwitch}
      handleChange={handleChange}
      inputSearchValue={inputSearchValue}
      handleSubmit={handleSubmit}
    />
  );
};
