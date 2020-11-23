import React from "react";
import ItemTextDescription from "./itemTextDescription";
import ItemCover from "../itemCover";
import { connect } from "react-redux";
import { API } from "../../API/api";
import BackToSearchButton from "../backToSearchButton";

const ItemDescription = ({ itemDetails }) => {
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

const mapStateToProps = (state) => ({
  itemDetails: state.currentItemStore.currentItem.data,
});

export default connect(mapStateToProps, {})(ItemDescription);
