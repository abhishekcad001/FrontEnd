import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useHistory();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [forgetLogin, setForgetLogin] = useState({ forgetemail: "" });
  const [error, setErrors] = useState({});

  const handleLogininfo = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({ ...prevLoginData, [name]: value }));
    setErrors({ ...error, [name]: "" });
  };

  const validateForm = () => {
    let formIsValid = true;
    let err = {};

    if (!loginData.email.trim()) {
      err.email = "*Please enter email here";
      formIsValid = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(loginData.email)) {
      err.email = "* Please enter a valid email address";
      formIsValid = false;
    }
    if (!loginData.password.trim()) {
      err.password = "* Please enter password here.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const User = {
        email: loginData.email,
        password: loginData.password,
      };
      console.log("first", User);
      try {
        await axios.post(`http://localhost:5000/api/auth/login`, User).then((res) => {
          if (res.data.success === true) {
            localStorage.setItem("userData", JSON.stringify(User));
            localStorage.setItem("UserToken", JSON.stringify(res?.data?.token));
            toast.success("You are successfully Login ");
            history.push("/");
          }
        });
      } catch (error) {
        // Handle the error, log it, etc.
        console.error("Error:", error);
        toast.error(error.response.data.message);
      }
    }
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setForgetLogin((prevForgetLogin) => ({ ...prevForgetLogin, [name]: value }));
    setErrors({ ...error, [name]: "" });
    console.log("forget", forgetLogin);
  };
  const validateForgetMail = () => {
    let formIsValid = true;
    let err = {};

    if (!forgetLogin.forgetemail.trim()) {
      err.forgetemail = "*Please enter email here";
      formIsValid = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(forgetLogin.forgetemail)) {
      err.forgetemail = "* Please enter a valid email address";
      formIsValid = false;
    }

    setErrors(err);
    return formIsValid;
  };
  const handleSubmitForget = async () => {
    if (validateForgetMail()) {
    }
  };

  return (
    <>
      <div className="ltn__login-area pb-65">
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

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Sign In <br />
                  To Your Account
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="account-login-inner">
                <div className="ltn__form-box contact-form-box">
                  <span style={{ color: "red" }}>{error.email}</span>{" "}
                  <input
                    type="email"
                    name="email"
                    value={loginData?.email}
                    placeholder="Email*"
                    onChange={(e) => {
                      handleLogininfo(e);
                    }}
                  />
                  <span style={{ color: "red" }}>{error.password}</span>
                  <input
                    type="password"
                    name="password"
                    value={loginData?.password}
                    onChange={(e) => {
                      handleLogininfo(e);
                    }}
                    placeholder="Password*"
                  />
                  <div className="btn-wrapper mt-0">
                    <button
                      className="theme-btn-1 btn btn-block"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="go-to-btn mt-20">
                    <a
                      href="#"
                      title="Forgot Password?"
                      data-bs-toggle="modal"
                      data-bs-target="#ltn_forget_password_modal"
                    >
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>

                <div className="btn-wrapper go-top">
                  <Link to="/register" className="theme-btn-1 btn black-btn">
                    CREATE ACCOUNT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__modal-area ltn__add-to-cart-modal-area----">
        <div className="modal fade" id="ltn_forget_password_modal" tabIndex={-1}>
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="modal-product-info text-center">
                          <h4>FORGET PASSWORD?</h4>
                          <p className="added-cart"> Enter your registered email.</p>
                          <div className="ltn__form-box">
                            <span style={{ color: "red" }}>{error.forgetemail}</span>
                            <input
                              type="email"
                              name="forgetemail"
                              value={forgetLogin?.forgetemail}
                              placeholder="Type your registered email*"
                              onChange={(e) => {
                                inputChange(e);
                              }}
                            />

                            <div className="btn-wrapper mt-0">
                              <button
                                className="theme-btn-1 btn btn-full-width-2"
                                onClick={() => {
                                  handleSubmitForget();
                                }}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="additional-info d-none">
                          <p>
                            We want to give you <b>10% discount</b> for your first order, <br /> Use discount code at
                            checkout
                          </p>
                          <div className="payment-method">{/* Add your payment method content here */}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
