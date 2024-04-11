import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "react-toastify/dist/ReactToastify.css";
import { ApiPost } from "../ApiService/ApiService";

const AsLister = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    drivingLicence: "",
    sinNumber: "",
    homeAddress: "",
    bathrooms: "",
    bedrooms: "",
    link: "",
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
    const phoneRegex = /^\d{10}$/;

    if (!formData.firstName.trim()) {
      err.firstName = "* Please enter First Name";
      formIsValid = false;
    }

    if (!formData.lastName.trim()) {
      err.lastName = "* Please enter Last Name";
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      err.email = "* Please enter Email";
      formIsValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      err.email = "* Please enter a valid Email";
      formIsValid = false;
    }

    if (!formData.contactNumber.trim()) {
      err.contactNumber = "* Please enter Contact Number";
      formIsValid = false;
    } else if (!phoneRegex.test(formData.contactNumber.trim())) {
      err.contactNumber = "* Please enter a valid Contact Number";
      formIsValid = false;
    }

    if (!formData.drivingLicence.trim()) {
      err.drivingLicence = "* Please enter Driving Licence";
      formIsValid = false;
    }

    if (!formData.sinNumber.trim()) {
      err.sinNumber = "* Please enter SIN Number";
      formIsValid = false;
    }

    if (!formData.homeAddress.trim()) {
      err.homeAddress = "* Please enter Home Address";
      formIsValid = false;
    }

    if (!formData.bathrooms.trim()) {
      err.bathrooms = "* Please enter Bathrooms";
      formIsValid = false;
    }

    if (!formData.bedrooms.trim()) {
      err.bedrooms = "* Please enter Bedrooms";
      formIsValid = false;
    }

    if (!formData.link.trim()) {
      err.link = "* Please enter Link";
      formIsValid = false;
    }

    setErrors(err);
    return formIsValid;
  };
  const token = JSON.parse(localStorage.getItem("UserToken"));

  
  const handleSubmit = async () => {
    if (validateForm()) {
      const user = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        contact_Number: parseInt(formData.contactNumber),
        driving_licence: parseInt(formData.drivingLicence),
        sin_Number: parseInt(formData.sinNumber),
        home_Address: formData.homeAddress,
        bathrooms: parseInt(formData.bathrooms),
        badrooms: parseInt(formData.bedrooms),
        link: formData.link,
      };

      console.log("------", user);

      try {
        const response = await axios.post("http://localhost:5000/api/user/becameLister", user, {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the header
          },
        });

        history.push("/");
        toast.success("You are successfully registered");
        toast.success("wait for the admin approval");
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
                Register Here
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <div className="ltn__form-box contact-form-box">
                <span style={{ color: "red" }}>{errors.firstName}</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                />

                <span style={{ color: "red" }}>{errors.lastName}</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                />

                <span style={{ color: "red" }}>{errors.email}</span>
                <input type="text" name="email" placeholder="Email*" onChange={handleChange} value={formData.email} />

                <span style={{ color: "red" }}>{errors.contactNumber}</span>
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number*"
                  onChange={handleChange}
                  value={formData.contactNumber}
                />

                <span style={{ color: "red" }}>{errors.drivingLicence}</span>
                <input
                  type="text"
                  name="drivingLicence"
                  placeholder="Driving Licence*"
                  onChange={handleChange}
                  value={formData.drivingLicence}
                />

                <span style={{ color: "red" }}>{errors.sinNumber}</span>
                <input
                  type="text"
                  name="sinNumber"
                  placeholder="SIN Number*"
                  onChange={handleChange}
                  value={formData.sinNumber}
                />

                <span style={{ color: "red" }}>{errors.homeAddress}</span>
                <input
                  type="text"
                  name="homeAddress"
                  placeholder="Home Address*"
                  onChange={handleChange}
                  value={formData.homeAddress}
                />

                <span style={{ color: "red" }}>{errors.bathrooms}</span>
                <input
                  type="text"
                  name="bathrooms"
                  placeholder="Bathrooms*"
                  onChange={handleChange}
                  value={formData.bathrooms}
                />

                <span style={{ color: "red" }}>{errors.bedrooms}</span>
                <input
                  type="text"
                  name="bedrooms"
                  placeholder="Bedrooms*"
                  onChange={handleChange}
                  value={formData.bedrooms}
                />

                <span style={{ color: "red" }}>{errors.link}</span>
                <input type="text" name="link" placeholder="Link*" onChange={handleChange} value={formData.link} />

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

export default AsLister;
