import React from "react";
import MainPage from "./mainPage/mainPage";

const Search = ({ match }) => {
  const isPath = match.path;
  return <MainPage isPath={isPath} />;
};

export default Search;
