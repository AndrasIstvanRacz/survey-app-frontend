import React from "react";
import Navigation from "./components/Navigation/Navigation";
import SurveysTab from "./components/SurveysTab/SurveysTab";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import "./AppStyle.css"
import CreateTab from "./components/CreateTab/CreateTab";
import {AuthForm} from "./components/AuthForm/AuthForm";


class App extends React.Component {



  render() {
    return (
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <SurveysTab/>
          </Route>
          <Route exact path="/create">
            <CreateTab/>
          </Route>
          <Route exact path="/login">
            <AuthForm/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
