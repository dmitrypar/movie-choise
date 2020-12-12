import React from "react";
import { API } from "../../API/api";
import { MainItemDetails } from "./mainItemDetails";

export const MainItemDetailsContainer = ({ onItenButtonClick, searchSwitch, res }) => {
  try {
    const linkToFilmPage = `/film/${res.id}`;
    const onItemClickHandler = () => onItenButtonClick(res.id);
    const coverImage = API.getcoverImage(res.poster_path);
    const itemTitle = res.title.toUpperCase();
    const releaseData = res.release_date.slice(0, 4);
    const popularity = searchSwitch ? res.popularity : null;
    return (
      <MainItemDetails
        linkToFilmPage={linkToFilmPage}
        onItemClickHandler={onItemClickHandler}
        coverImage={coverImage}
        itemTitle={itemTitle}
        releaseData={releaseData}
        popularity={popularity}
      />
    );
  } catch (e) {
    return <div className="">нет данных</div>;
  }
};


