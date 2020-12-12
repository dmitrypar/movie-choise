import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./logo";

export const BackToSearchButton = () => {
  const buttonLabel = "Search";
  return (
    <div className="backToSearchButton">
      <Logo />
      <Link to="/search">
        <button className="backToSearchElement">
          {buttonLabel.toUpperCase()}
        </button>
      </Link>
    </div>
  );
};
