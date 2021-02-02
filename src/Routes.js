import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import  "./App.css";
import ProfileComponent from "./components/ProfileComponent";
const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/profile" exact component={ProfileComponent} />

        </Switch>
      </BrowserRouter>  
    );
}
export default Routes;