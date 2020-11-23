import React, { useState } from "react";
import { connect } from "react-redux";
import {
  getSearchedAndSortedItems,
  getSimilarSortedItems,
} from "../../redux/itemSelectors";
import { onCurrentItemSelected } from "./../../redux/actions";
import MainItemDetailsContainer from "../../components/mainItemDetails/MainItemDetailsContainer";

const MainPageContent = (props) => {
  const {
    searchResults,
    isPath,
    searchSwitch,
    onCurrentItemSelected,
    similarItems,
  } = props;
  const onItenButtonClick = (id) => {
    onCurrentItemSelected(id);
  };

  const getResultsToRender = () => {
    if (isPath === "/search") {
      return searchResults;
    } else if (isPath === "/film/:slug") {
      return similarItems;
    }
  };

  const finalResultsToRenderItems = getResultsToRender();
  const noItemsSearched = "No films Found";
  return (
    <div className="mainPageContentWrapper">
      <div className="searchResultContainer">
        {finalResultsToRenderItems && finalResultsToRenderItems.length > 0 ? (
          finalResultsToRenderItems &&
          finalResultsToRenderItems.map((res) => {
            try {
              return (
                <MainItemDetailsContainer
                  key={res.overview || res.title}
                  onItenButtonClick={onItenButtonClick}
                  searchSwitch={searchSwitch}
                  res={res}
                />
              );
            } catch (e) {
              return <div className="">Попробуйте другой запрос</div>;
            }
          })
        ) : (
          <div className="noItemsSearched">{noItemsSearched}</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchResults: getSearchedAndSortedItems(state),
  searchSwitch: state.navigateData.switcher,
  similarItems: getSimilarSortedItems(state),
});

export default connect(mapStateToProps, { onCurrentItemSelected })(
  MainPageContent
);
