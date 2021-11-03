import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { ApplicationStore } from "../../services/applicationStore";
import { AppRoutes, Strings } from "../../values";

interface AuthGuardProps extends RouteProps {}

const AuthGuard: React.FC<AuthGuardProps> = ({ location, ...rest }) => {
  const isAuthenticated = ApplicationStore.isAuthenticated(Strings.token);

  if (!isAuthenticated) {
    return (
      <Redirect to={{ pathname: AppRoutes.login, state: { from: location } }} />
    );
  }

  return <Route {...rest} />;
};

export { AuthGuard };
