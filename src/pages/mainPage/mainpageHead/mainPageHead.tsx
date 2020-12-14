import React from "react";
import { MainPageHeadWrapper } from "./mainPageHeadWrapper";

type PropTypes = {
  isPath: string;
};

export const MainPageHead: React.FC<PropTypes> = ({ isPath }) => {
  return (
    <div>
      <MainPageHeadWrapper isPath={isPath} />
    </div>
  );
};
