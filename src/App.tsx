import { ApplicationProvider } from "./context";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthGuard } from "./middleware/AuthGuard";
import { AppRoutes } from "./values";

import { FeedbackActionsProvider } from "./features/components/FeedbackActions";

import { NotFound } from "./features/NotFound";
import { Profile } from "./features/Profile";
import { Login } from "./features/Login";
import { Home } from "./features/Home";

const App = () => (
  <ApplicationProvider>
    <FeedbackActionsProvider>
      <BrowserRouter>
        <Switch>
          <AuthGuard exact path={AppRoutes.home} component={Home} />
          <AuthGuard path={AppRoutes.profile} component={Profile} />
          <Route path={AppRoutes.login} component={Login} />
          <Route path={AppRoutes.notFound} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </FeedbackActionsProvider>
  </ApplicationProvider>
);

export { App };
