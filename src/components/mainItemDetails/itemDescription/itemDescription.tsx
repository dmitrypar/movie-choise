import React from "react";
import { useSelector } from "react-redux";
import { ItemTextDescription } from "./itemTextDescription";
import { ItemCover } from "../../itemCover/itemCover";
import { API } from "../../../API/api";
import { BackToSearchButton } from "../../backToSearchButton/backToSearchButton";
import { getItemData } from "../../../redux/item/selectors";
import styles from "../../../styles/main.module.scss";

export const ItemDescription = () => {
  const itemDetails = useSelector(getItemData);
  const coverImage = API.getcoverImage(itemDetails && itemDetails.poster_path);
  return (
    <div className={styles.itemDescription}>
      <BackToSearchButton />
      {itemDetails && (
        <div className={styles.itemContentBlock}>
          <ItemCover coverImage={coverImage} />
          <ItemTextDescription itemDetails={itemDetails} />
        </div>
      )}
    </div>
  );
};
