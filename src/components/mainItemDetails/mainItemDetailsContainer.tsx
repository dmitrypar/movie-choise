import React from "react";
import { API } from "../../API/api";
import { SearchedResultsByNameTypes } from "../../redux/search/types";
import { MainItemDetails } from "./mainItemDetails";

type PropsTypes = {
  onItemButtonClick: (id: number) => void;
  searchSwitch: boolean;
  res: SearchedResultsByNameTypes;
};

export const MainItemDetailsContainer: React.FC<PropsTypes> = ({
  onItemButtonClick: onItemButtonClick,
  searchSwitch,
  res,
}) => {
  try {
    const { id, popularity, title, release_date, poster_path } = res;
    const linkToFilmPage = `/film/${res.id}`;
    const onItemClickHandler = () => onItemButtonClick(id);
    const coverImage = API.getcoverImage(poster_path);
    const itemTitle = title.toUpperCase();
    const releaseData = release_date.slice(0, 4);
    const popularityValue = searchSwitch ? popularity : null;
    return (
      <MainItemDetails
        linkToFilmPage={linkToFilmPage}
        onItemClickHandler={onItemClickHandler}
        coverImage={coverImage}
        itemTitle={itemTitle}
        releaseData={releaseData}
        popularity={popularityValue}
      />
    );
  } catch (e) {
    return <div className="">нет данных</div>;
  }
};
