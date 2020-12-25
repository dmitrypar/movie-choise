/* eslint-disable  */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter, useLocation } from "react-router-dom";
import {
  getSearchedAndSortedItems,
  switchResultByTitleOrPerson,
} from "../../../redux/search/selectors";
import { getSimilarSortedItems } from "../../../redux/item/selectors";
import { onCurrentItemSelected } from "../../../redux/item/actions";
import { MainItemDetailsContainer } from "../../../components/mainItemDetails/mainItemDetails/mainItemDetailsContainer";
import styles from "../../../styles/main.module.scss";

type PropsTypes = RouteComponentProps;

const MainPageContent: React.FC<PropsTypes> = ({ match, history }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector(getSearchedAndSortedItems);
  const searchSwitch = useSelector(switchResultByTitleOrPerson);
  const similarItems = useSelector(getSimilarSortedItems);

  const onItemButtonClick = (id: number) => {
    history.push(`/film/${id}`);
    dispatch(onCurrentItemSelected(id));
  };

  const getResultsToRender = () => {
    if (match.path === "/search") {
      return searchResults;
    }
    if (match.path === "/film/:id") {
      return similarItems;
    }
  };

  const finalResultsToRenderItems = getResultsToRender();
  const noItemsSearched = "Воспользуйся поиском - найди фильм";
  return (
    <div className={styles.mainPageContentWrapper}>
      <div className={styles.searchResultContainer}>
        {finalResultsToRenderItems && finalResultsToRenderItems.length > 0 ? (
          finalResultsToRenderItems &&
          finalResultsToRenderItems.map((res) => {
            try {
              return (
                <MainItemDetailsContainer
                  key={res.id && res.title}
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
          <div className={styles.noItemsSearched}>{noItemsSearched}</div>
        )}
      </div>
    </div>
  );
};

export default withRouter(MainPageContent);
