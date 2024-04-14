import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "react-toastify/dist/ReactToastify.css";
import { ApiPost } from "../ApiService/ApiService";

const CheckoutDetail = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    creditCard_Number: "",
    cvv_Number: "",
    expiry_date: "",
    memberShip_Amount: "",
    memberShip_Type: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const creditCardRegex = /^\d{16}$/; // Matches 16 digits
    const cvvRegex = /^\d{3}$/; // Matches 3 digits
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // Matches MM/YY format

    if (!formData.firstName.trim()) {
      err.firstName = "* Please enter First Name";
      formIsValid = false;
    }

    if (!formData.lastName.trim()) {
      err.lastName = "* Please enter Last Name";
      formIsValid = false;
    }

    if (!formData.creditCard_Number.trim()) {
      err.creditCard_Number = "* Please enter Credit Card Number";
      formIsValid = false;
    } else if (!creditCardRegex.test(formData.creditCard_Number.trim())) {
      err.creditCard_Number = "* Please enter a valid 16-digit Credit Card Number";
      formIsValid = false;
    }

    if (!formData.cvv_Number.trim()) {
      err.cvv_Number = "* Please enter CVV Number";
      formIsValid = false;
    } else if (!cvvRegex.test(formData.cvv_Number.trim())) {
      err.cvv_Number = "* Please enter a valid 3-digit CVV Number";
      formIsValid = false;
    }

    if (!formData.expiry_date.trim()) {
      err.expiry_date = "* Please enter Expiry date";
      formIsValid = false;
    } else if (!expiryDateRegex.test(formData.expiry_date.trim())) {
      err.expiry_date = "* Please enter a valid MM/YY format";
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      err.email = "* Please enter Email";
      formIsValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      err.email = "* Please enter a valid Email";
      formIsValid = false;
    }

    setErrors(err);
    return formIsValid;
  };

  const token = JSON.parse(localStorage.getItem("UserToken"));

  const handleSubmit = async () => {
    if (validateForm()) {
      const user = {
        email: formData.email,
        lastName: formData.lastName,
        firstName: formData.firstName,
        creditCard_Number: formData.creditCard_Number,
        cvv_Number: formData.cvv_Number,
        expiry_date: formData.expiry_date,
        memberShip_Amount: 20,
        memberShip_Type: "Starter",
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.post("http://localhost:5000/api/user/wishList", user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("You are successfully member ");
        history.push("/");
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

                <span style={{ color: "red" }}>{errors.creditCard_Number}</span>
                <input
                  type="text"
                  name="creditCard_Number"
                  placeholder="Credit Card Number*"
                  onChange={handleChange}
                  value={formData.creditCard_Number}
                />

                <span style={{ color: "red" }}>{errors.cvv_Number}</span>
                <input
                  type="text"
                  name="cvv_Number"
                  placeholder="CVV Number*"
                  onChange={handleChange}
                  value={formData.cvv_Number}
                />

                <span style={{ color: "red" }}>{errors.expiry_date}</span>
                <input
                  type="text"
                  name="expiry_date"
                  placeholder="Expiry Date* (MM-YY)"
                  onChange={handleChange}
                  value={formData.expiry_date}
                />

                <span style={{ color: "red" }}>{errors.memberShip_Amount}</span>
                <input type="text" name="memberShip_Amount" placeholder="Membership Amount*" disabled value="$ 20" />

                <span style={{ color: "red" }}>{errors.memberShip_Type}</span>
                <input type="text" name="memberShip_Type" placeholder="Membership Type*" disabled value="Starter" />

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

export default CheckoutDetail;
