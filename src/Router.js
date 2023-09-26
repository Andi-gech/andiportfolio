import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Router() {
  return (
    <Switch>
      \{" "}
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
}
