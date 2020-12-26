import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getSearchedAndSortedItems,
  switchResultByTitleOrPerson,
} from "../../../redux/search/selectors";
import { onCurrentItemSelected } from "../../../redux/item/actions";
import { ItemDetailsContainer } from "../../../components/mainItemDetails/itemDetails/itemDetailsContainer";
import styles from "../../../styles/main.module.scss";

export const SearchPageContent = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(getSearchedAndSortedItems);
  const searchSwitch = useSelector(switchResultByTitleOrPerson);
  const history = useHistory();
  const onItemButtonClick = (id: number) => {
    history.push(`/film/${id}`);
    dispatch(onCurrentItemSelected(id));
  };

  const noItemsSearched = "Воспользуйся поиском - найди фильм";
  return (
    <div className={styles.mainPageContentWrapper}>
      <div className={styles.searchResultContainer}>
        {searchResults && searchResults.length > 0 ? (
          searchResults &&
          searchResults.map((res) => {
            try {
              return (
                <ItemDetailsContainer
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
