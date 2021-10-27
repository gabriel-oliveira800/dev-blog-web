import React, { useEffect, useState } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { ApplicationStore } from "../../services";
import { AppRoutes, Strings } from "../../values";

interface AuthGuardProps extends RouteProps {
  authRouter: React.FC;
}

const AuthGuard = ({ authRouter, ...rest }: AuthGuardProps) => (
  <Route {...rest}>
    {ApplicationStore.isAuthenticated(Strings.token) ? (
      authRouter
    ) : (
      <Redirect to="/login" />
    )}
  </Route>
);

export { AuthGuard };
