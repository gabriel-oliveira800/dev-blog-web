import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApplicationProvider } from "./core/context";

import { AuthGuard } from "./core/middleware/AuthGuard";
import { AppRoutes } from "./core/values";

import { FeedbackActionsProvider } from "./features/components/FeedbackActions";
import { CreateFeed } from "./features/CreateFeed";
import { NotFound } from "./features/NotFound";
import { Profile } from "./features/Profile";
import { Login } from "./features/Login";
import { Home } from "./features/Home";

function App() {
  return (
    <ApplicationProvider>
      <FeedbackActionsProvider>
        <BrowserRouter>
          <Switch>
            <AuthGuard exact path={AppRoutes.home} component={Home} />
            <AuthGuard path={AppRoutes.profile} component={Profile} />
            <AuthGuard path={AppRoutes.createFeed} component={CreateFeed} />

            {/* Routes without authentication  */}

            <Route path={AppRoutes.login} component={Login} />
            <Route path={AppRoutes.notFound} component={NotFound} />
          </Switch>
        </BrowserRouter>
      </FeedbackActionsProvider>
    </ApplicationProvider>
  );
}

export { App };
