import React from "react";

type PropsTypes = {
  coverImage: string;
};

export const ItemCover: React.FC<PropsTypes> = ({ coverImage }) => {
  return (
    <div className="itemWrapper">
      <img className="coverImage" src={coverImage} alt="" />
    </div>
  );
};
