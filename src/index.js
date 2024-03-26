import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home-v2";
import Login from "./components/login";
import Register from "./components/register";
import OtpU from "./components/otp";
import changePass from "./components/changePass";
import { ToastContainer } from "react-toastify";
import Properties from "./components/properties";
import PropertyDetail from "./components/propertyDetail";
import AboutUs from "./aboutUs";

class Root extends Component {
  render() {
    return (
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Otp" component={OtpU} />
          <Route exact path="/Change-password" component={changePass} />
          <Route exact path="/Properties" component={Properties} />
          <Route exact path="/Property-details" component={PropertyDetail} />
          <Route exact path="/Aboutus" component={AboutUs} />
        </Switch>
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
