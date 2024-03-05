import React, { useState } from "react";
import { ApiPost } from "../ApiService/ApiService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const ChangePassword = () => {
    const history = useHistory();
  const [formData, setFormData] = useState({
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

    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

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
        email: localStorage.getItem('resetEmail'),
        newPassword: formData.password,
      };

        try {
          const response = await ApiPost("/api/auth/changePwd-ForgetPwd", user);

          if (response.success === true) {
            history.push("/login");
            toast.success("Password Change ");
          }
        } catch (error) {
          // Handle the error, log it, etc.
          console.error("Error:", error);
          toast.error(error.response.data.message);
        }
    }
  };

  return (
    <div className="ltn__login-area pb-65">
      <div className="col-lg-6">
        <div className="account-login-inner">
          <div className="ltn__form-box contact-form-box">
            <span style={{ color: "red" }}>{errors.password}</span>

            <input
              type="password"
              name="password"
              placeholder="Password*"
              onChange={handleChange}
              value={formData?.password}
            />

            <span style={{ color: "red" }}>{errors.confirmpassword}</span>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password*"
              onChange={handleChange}
              value={formData?.confirmpassword}
            />

            <div className="btn-wrapper mt-0">
              <button
                className="theme-btn-1 btn btn-block"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
            <div className="go-to-btn mt-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
