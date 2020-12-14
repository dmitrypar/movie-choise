import * as React from "react";
import { MainPage } from "./mainPage/mainPage";

export type PropType = {
  history: {};
  match: {
    path: string;
    url: string;
    isExact: boolean;
    params: {};
  };
};

export const Film: React.FC<PropType> = ({ match }) => {
  const isPath = match.path;
  return <MainPage isPath={isPath} />;
};
