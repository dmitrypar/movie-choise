import React from "react";

type Propstype = {
  coverImage: string;
};

export const ItemCover: React.FC<Propstype> = ({ coverImage }) => {
  return (
    <div className="itemWrapper">
      <img className="coverImage" src={coverImage} alt="" />
    </div>
  );
};
