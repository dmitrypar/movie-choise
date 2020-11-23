import React, { useEffect, useState } from "react";
import SearchField from "./searchField";
import {API} from "../../API/api";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { getSearchResultByName, getSearchResultByPerson, setSearchSwitch, requestSearchedresults } from "../../redux/actions";

const SearchFieldContainer = ({ getSearchResultByName, getSearchResultByPerson, setSearchSwitch, searchSwitch, requestSearchedresults }) => {
  const { values: inputSearchValue, handleChange, handleSubmit } = useFormik({
    initialValues: {
      mainSearchForm: "",
    },
    onSubmit: (values, onSubmitProps) => {
      onSubmitProps.resetForm();
      //console.log(values);
      searchApiSwitcher()
    },
  });
  const searchApiSwitcher = ()=>{
    if(searchSwitch){
      requestSearchedresults(inputSearchValue)
       API.fetchSearchedItemsByTitle(inputSearchValue)
      .then((data) => getSearchResultByName(data));
    } else {
      requestSearchedresults(inputSearchValue)
       API.fetchSearchedItemsByPerson(inputSearchValue)
      .then((data) => getSearchResultByPerson(data));
    }
  }
  useEffect(() => {
    inputSearchValue.mainSearchForm &&
    searchApiSwitcher()
        
  }, [inputSearchValue.mainSearchForm]);
 

  return (
    <SearchField
    searchSwitch={searchSwitch}
    setSearchSwitch={setSearchSwitch}
      handleChange={handleChange}
      inputSearchValue={inputSearchValue}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = (state) => ({
  searchSwitch:state.navigateData.switcher
});

export default connect(mapStateToProps, { getSearchResultByName, getSearchResultByPerson, setSearchSwitch, requestSearchedresults })(SearchFieldContainer);
