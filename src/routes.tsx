import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Country } from "./components/pages/Country";
import { Home } from "./components/pages/Home";

export interface IAppRoutesParams {
  countryCode: string;
}

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:countryCode" component={Country} />
      </Switch>
    </BrowserRouter>
  );
};
