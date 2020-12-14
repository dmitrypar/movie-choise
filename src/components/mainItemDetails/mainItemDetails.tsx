import React from "react";
import { Link } from "react-router-dom";

type PropsTypes = {
  onItemClickHandler: ()=> void
  coverImage: string
  itemTitle: string
  releaseData: string
  popularity: number
}

export const MainItemDetails: React.FC<PropsTypes> = ({
  onItemClickHandler,
  coverImage,
  itemTitle,
  releaseData,
  popularity,
}) => {
  return (
    <div className="itemWrapper">
      <div className="coverWrapper">
     
          <div className="itemCover" onClick={onItemClickHandler} tabIndex={-1}>
            <img className="coverImage" src={coverImage} alt="" />
          </div>
       
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


