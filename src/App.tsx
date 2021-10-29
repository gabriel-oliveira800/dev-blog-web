import { ApplicationProvider } from "./context";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthGuard } from "./middleware/AuthGuard";
import { AppRoutes } from "./values";

import { NotFound } from "./pages/NotFound/";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

const App = () => (
  <ApplicationProvider>
    <BrowserRouter>
      <Switch>
        <AuthGuard exact path={AppRoutes.home} component={Home} />
        <AuthGuard path={AppRoutes.profile} component={Profile} />
        <Route path={AppRoutes.login} component={Login} />
        <Route path={AppRoutes.notFound} component={NotFound} />
      </Switch>
    </BrowserRouter>
  </ApplicationProvider>
);

export { App };
