import React from "react";
import { Link } from "react-router-dom";

type PropsTypes = {
  linkToFilmPage: string;
  onItemClickHandler: () => void;
  coverImage: string;
  itemTitle: string;
  releaseData: string;
  popularity: number;
};

export const MainItemDetails: React.FC<PropsTypes> = ({
  linkToFilmPage,
  onItemClickHandler,
  coverImage,
  itemTitle,
  releaseData,
  popularity,
}) => {
  return (
    <div className="itemWrapper">
      <div className="coverWrapper">
        <Link to={linkToFilmPage} onClick={onItemClickHandler}>
          <div className="itemCover">
            <img className="coverImage" src={coverImage} alt="" />
          </div>
        </Link>
      </div>
      <div className="bottomItemTextWrapper">
        <div className="topLineTextItem">
          <div className="itemTitle">{itemTitle}</div>
          <div className="releaseData">{releaseData}</div>
        </div>
        <div className="popularity">{popularity}</div>
      </div>
    </div>
  );
};
