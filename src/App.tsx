import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthGuard } from "./middleware/AuthGuard";

import { NotFound } from "./pages/NotFound/";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <AuthGuard exact path="/" authRouter={Home} />
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export { App };
