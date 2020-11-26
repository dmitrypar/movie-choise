import React from "react";
import ItemTextDescription from "./itemTextDescription";
import ItemCover from "../itemCover";
import { useSelector } from "react-redux";
import { API } from "../../API/api";
import BackToSearchButton from "../backToSearchButton";
import {getItemData} from './../../item/redux/selectors';

const ItemDescription = () => {
  const itemDetails = useSelector(getItemData)
  const coverImage = API.getcoverImage(itemDetails && itemDetails.poster_path);
  return (
    <div className="itemDescription">
      <BackToSearchButton />
      <div className="itemContentBlock">
        <ItemCover coverImage={coverImage} />
        <ItemTextDescription itemDetails={itemDetails} />
      </div>
    </div>
  );
};


export default ItemDescription;
