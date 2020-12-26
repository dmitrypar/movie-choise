import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { switchResultByTitleOrPerson } from "../../../redux/search/selectors";
import { getSimilarSortedItems } from "../../../redux/item/selectors";
import { onCurrentItemSelected } from "../../../redux/item/actions";
import { ItemDetailsContainer } from "../../../components/mainItemDetails/itemDetails/itemDetailsContainer";
import styles from "../../../styles/main.module.scss";

export const ItemPageContent = () => {
  const dispatch = useDispatch();
  const searchSwitch = useSelector(switchResultByTitleOrPerson);
  const similarItems = useSelector(getSimilarSortedItems);
  const history = useHistory();

  const onItemButtonClick = (id: number) => {
    history.push(`/film/${id}`);
    dispatch(onCurrentItemSelected(id));
  };

  const noItemsSearched = "Воспользуйся поиском - найди фильм";
  return (
    <div className={styles.mainPageContentWrapper}>
      <div className={styles.searchResultContainer}>
        {similarItems && similarItems.length > 0 ? (
          similarItems &&
          similarItems.map((res) => {
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
