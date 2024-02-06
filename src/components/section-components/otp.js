import React, { Component } from "react";
import { Link } from "react-router-dom";

class Otp extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <>
        <div className="ltn__login-area pb-65">
          <div className="">
            <div className="col-lg-6">
              <div className="account-login-inner">
                <form method="GET" className="ltn__form-box contact-form-box">
                  <input type="text" name="Otp" placeholder="Otp*" />

                  <div className="btn-wrapper mt-0">
                    <button className="theme-btn-1 btn btn-block" type="submit">
                     Sibmit
                    </button>
                  </div>
                  <div className="go-to-btn mt-20"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Otp;
