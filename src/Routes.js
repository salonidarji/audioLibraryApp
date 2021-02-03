import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import  "./App.css";
import ProfileComponent from "./components/ProfileComponent";
import LoginComponent from "./components/LoginComponent";
import NotFoundComponent from "./components/NotFoundComponent";

import createBrowserHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const Routes = () => {
    return (
      <Router history={history} >
        <Switch>
          <PublicRoute path="/" exact component={LoginComponent} />
          <PrivateRoute path="/home" exact component={HomeComponent} />
          <PrivateRoute path="/profile" exact component={ProfileComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </Router>  
    );
}
export default Routes;