import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "react-toastify/dist/ReactToastify.css";
import { ApiPost } from "../ApiService/ApiService";

const Register = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("form data ", formData);
  };

  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!formData.firstname.trim()) {
      err.firstname = "* Please enter First Name";
      formIsValid = false;
    }

    if (!formData.lastname.trim()) {
      err.lastname = "* Please enter Last Name";
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      err.email = "* Please enter Email";
      formIsValid = false;
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      err.email = "* Please enter a valid Email";
      formIsValid = false;
    }

    if (!formData.password.trim()) {
      err.password = "* Please enter Password";
      formIsValid = false;
    } else if (!passwordRegex.test(formData.password.trim())) {
      err.password =
        "* Password must be at least 6 characters long and contain at least one special character, one lowercase letter, one uppercase letter, and one numeric digit";
      formIsValid = false;
    }

    if (!formData.confirmpassword.trim()) {
      err.confirmpassword = "* Please enter Confirm Password";
      formIsValid = false;
    }

    if (formData.password.trim() !== formData.confirmpassword.trim()) {
      err.confirmpassword = "* Passwords do not match";
      formIsValid = false;
    }

    setErrors(err);
    return formIsValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const user = {
        email: formData.email,
        password: formData.password,
        lastName: formData.lastname,
        firstName: formData.firstname,
      };

      try {
        const response = await ApiPost("/api/auth/add-User", user);

        if (response.success === true) {
          history.push("/login");
          toast.success("You are successfully Register ");
        }
      } catch (error) {
        // Handle the error, log it, etc.
        console.error("Error:", error);
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="ltn__login-area pb-110">
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
                Register <br />
                Your Account
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <div className="ltn__form-box contact-form-box">
                <span style={{ color: "red" }}>{errors.firstname}</span>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstname}
                />

                <span style={{ color: "red" }}>{errors.lastname}</span>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastname}
                />

                <span style={{ color: "red" }}>{errors.email}</span>
                <input type="text" name="email" placeholder="Email*" onChange={handleChange} value={formData.email} />

                <span style={{ color: "red" }}>{errors.password}</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  onChange={handleChange}
                  value={formData.password}
                />

                <span style={{ color: "red" }}>{errors.confirmpassword}</span>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password*"
                  onChange={handleChange}
                  value={formData.confirmpassword}
                />

                <div className="btn-wrapper">
                  <button
                    className="theme-btn-1 btn reverse-color btn-block"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
