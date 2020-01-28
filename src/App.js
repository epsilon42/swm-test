import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/test1">
          <Test1 />
        </Route>
        <Route path="/test2">
          <Test2 />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
