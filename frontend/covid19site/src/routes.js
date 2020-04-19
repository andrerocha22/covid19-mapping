import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import News from "./pages/News";
import About from "./pages/About";
import ChoosedState from "./pages/ChoosedState";

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/noticias" exact component={News} />
        <Route path="/sobre-a-doenca" exact component={About} />
        <Route path="/estado/:id" component={ChoosedState} />
      </Switch>
    </BrowserRouter>
  );
}
