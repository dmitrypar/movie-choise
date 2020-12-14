import React from "react";
import { MainPageHead } from "./mainpageHead/mainPageHead";
import { MainPageContent } from "./mainPageContent";
import { MainPageFooter } from "./mainPageFooter";

type PropTypes = {
  isPath: string;
};

export const MainPage: React.FC<PropTypes> = ({ isPath }) => {
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="pageHead">
          <MainPageHead isPath={isPath} />
        </div>
        <div className="pageContent">
          <MainPageContent isPath={isPath} />
        </div>
        <div className="pageFooter">
          <MainPageFooter />
        </div>
      </div>
    </div>
  );
};
