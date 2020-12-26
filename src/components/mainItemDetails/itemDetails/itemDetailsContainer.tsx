import React from "react";
import { API } from "../../../API/api";
import { SearchedResultsByNameTypes } from "../../../redux/search/types";
import { ItemDetails } from "./itemDetails";

type PropsTypes = {
  onItemButtonClick: (id: number) => void;
  searchSwitch: boolean;
  res: SearchedResultsByNameTypes;
};

export const ItemDetailsContainer: React.FC<PropsTypes> = ({
  onItemButtonClick,
  searchSwitch,
  res,
}) => {
  const { id, popularity, title, release_date, poster_path } = res;
  const onItemClickHandler = () => onItemButtonClick(id);
  const coverImage = API.getcoverImage(poster_path);
  const itemTitle = title && title.toUpperCase();
  const releaseData = release_date && release_date.slice(0, 4);
  const popularityValue = searchSwitch ? popularity : null;
  return (
    <ItemDetails
      onItemClickHandler={onItemClickHandler}
      coverImage={coverImage}
      itemTitle={itemTitle}
      releaseData={releaseData}
      popularity={popularityValue}
    />
  );
};
