import React, { useState } from "react";
import { ApiPost } from "../ApiService/ApiService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Otp = () => {
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      otp: otp,
    };

    try {
      const apiResponse = await ApiPost("/api/auth/verify-otp-ChnagePwd", data);

      if (apiResponse.success === true) {
        history.push("/Change-password");
        toast.success("OTP verified successfully  ");
      }
    } catch (error) {
      toast.error("Somthing wrong ");
    }
  };

  return (
    <div className="ltn__login-area pb-65">
      <div className="col-lg-6">
        <div className="account-login-inner">
          <div className="ltn__form-box contact-form-box">
            <input type="text" name="otp" placeholder="OTP*" value={otp} onChange={(e) => handleInputChange(e)} />
            {errors.otp && <p className="error-message">{errors.otp}</p>}

            <div className="btn-wrapper mt-0">
              <button className="theme-btn-1 btn btn-block" onClick={() => handleSubmit()}>
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

export default Otp;
