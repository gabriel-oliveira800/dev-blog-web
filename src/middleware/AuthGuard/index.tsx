import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

//Todo: add auth check
const isAuthenticated = true;

interface AuthGuardProps extends RouteProps {
  authRouter: React.FC;
}

const AuthGuard = ({ authRouter, ...rest }: AuthGuardProps) => (
  <Route {...rest}>
    {isAuthenticated ? authRouter : <Redirect to="/login" />}
  </Route>
);

export { AuthGuard };
