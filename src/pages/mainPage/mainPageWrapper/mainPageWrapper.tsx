import React from "react";
import { MainPageHead } from "../mainpageHead/mainPageHead";
import  MainPageContent  from "../mainPageContent/mainPageContent";
import { MainPageFooter } from "../mainPageFooter/mainPageFooter";



export const MainPage = () => {
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="pageHead">
          <MainPageHead  />
        </div>
        <div className="pageContent">
          <MainPageContent  />
        </div>
        <div className="pageFooter">
          <MainPageFooter />
        </div>
      </div>
    </div>
  );
};
