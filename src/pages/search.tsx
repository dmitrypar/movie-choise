import * as React from "react";
import { MainPage } from "./mainPage/mainPage";

type PropType = {
  match: {
    path: string;
    url: string;
    isExact: boolean;
    params: {};
  };
};

export const Search: React.FC<PropType> = ({ match }) => {
  const isPath = match.path;
  return <MainPage isPath={isPath} />;
};
