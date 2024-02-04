import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Register extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__login-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Register <br />
                  Your Account
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="account-login-inner">
                <form action="#" className="ltn__form-box contact-form-box">
                  <input type="text" name="firstname" placeholder="First Name" />
                  <input type="text" name="lastname" placeholder="Last Name" />
                  <input type="text" name="email" placeholder="Email*" />
                  <input type="password" name="password" placeholder="Password*" />
                  <input type="password" name="confirmpassword" placeholder="Confirm Password*" />

                  <div className="btn-wrapper">
                    <button className="theme-btn-1 btn reverse-color btn-block" type="submit">
                      CREATE ACCOUNT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
