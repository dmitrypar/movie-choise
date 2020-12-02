import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedAndSortedItems } from "../../redux/search/selectors";
import { getSimilarSortedItems } from "../../redux/item/selectors";
import { onCurrentItemSelected } from "../../redux/item/actions";
import MainItemDetailsContainer from "../../components/mainItemDetails/MainItemDetailsContainer";

const MainPageContent = (props) => {
  const {
    isPath
  } = props;
  const dispatch = useDispatch()
  const searchResults = useSelector(getSearchedAndSortedItems)
  const searchSwitch = useSelector(state=>state.searchedItems.switcher)
  const similarItems = useSelector(getSimilarSortedItems)
  const onItenButtonClick = (id) => {
    dispatch(onCurrentItemSelected(id));
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



export default MainPageContent
