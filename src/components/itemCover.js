import React from "react";


export const ItemCover = ({ coverImage }) => {
  return (
    <div className="itemWrapper">
      <img className="coverImage" src={coverImage} alt="" />
    </div>
  );
};
