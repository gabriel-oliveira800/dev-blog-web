import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthGuard } from "./middleware/AuthGuard";

import { NotFound } from "./pages/NotFound/";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AppRoutes } from "./values";

const App = () => (
  <BrowserRouter>
    <Switch>
      <AuthGuard exact path={AppRoutes.home} authRouter={Home} />
      <AuthGuard exact path={AppRoutes.profile} authRouter={Home} />
      <Route path={AppRoutes.login} component={Login} />
      <Route path={AppRoutes.notFound} component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export { App };
