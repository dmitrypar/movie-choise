import React from "react";
import MainPageHead from "./mainpageHead/mainPageHead";
import MainPageContent from "./mainPageContent";
import MainPageFooter from "./mainPageFooter";

const MainPage = ({ isPath }) => {
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="pageHead">
          <MainPageHead isPath={isPath} />
        </div>
        <div className="pageContent">
          <MainPageContent isPath={isPath}/>
        </div>
        <div className="pageFooter">
          <MainPageFooter />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
