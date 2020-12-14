import React from "react";
import { Switch, Route } from "react-router-dom";
import { Film } from "./pages/film";
import { Search } from "./pages/search";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Search} exact />
      <Route path="/film/:id" component={Film} />
      <Route path="/search" component={Search} />
    </Switch>
  );
};
