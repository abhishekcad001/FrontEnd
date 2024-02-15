import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home-v2";
import Login from "./components/login";
import Register from "./components/register";
import OtpU from "./components/otp";

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Otp" component={OtpU} />
        </Switch>
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
