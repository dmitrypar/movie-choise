import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchedAndSortedItems,
  switchResultByTitleOrPerson,
} from "../../redux/search/selectors";
import { getSimilarSortedItems } from "../../redux/item/selectors";
import { onCurrentItemSelected } from "../../redux/item/actions";
import {MainItemDetailsContainer} from "../../components/mainItemDetails/mainItemDetailsContainer";
import { RouteComponentProps, withRouter } from "react-router-dom";

type PropsTypes = RouteComponentProps

const MainPageContent: React.FC<PropsTypes> = ({ match, history }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector(getSearchedAndSortedItems);
  const searchSwitch = useSelector(switchResultByTitleOrPerson);
  const similarItems = useSelector(getSimilarSortedItems);

  const onItemButtonClick = (id: number) => {
    const filmIdPush = (id: number) => history.push(`/film/${id}`);
    dispatch(onCurrentItemSelected(id));
    filmIdPush(id);
  };

  const getResultsToRender = () => {
    if (match.path === "/search") {
      return searchResults;
    } else if (match.path === "/film/:id") {
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
                  onItemButtonClick={onItemButtonClick}
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

export default withRouter(MainPageContent);
