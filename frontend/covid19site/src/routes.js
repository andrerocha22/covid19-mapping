import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main"

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        {/* <Route path="/vender-apartamento" exact component={SellApartment} />
        <Route path="/vender-apartamento/formulario" exact component={SellForm} /> */}
      </Switch>
    </BrowserRouter>
  );
}
