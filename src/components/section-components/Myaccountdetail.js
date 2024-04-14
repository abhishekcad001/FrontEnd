import React, { useEffect, useState } from "react";

const Myaccountdetail = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem("User"));

    if (user) {
      setUserData({
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
      });
    }
  }, []);

  return (
    <>
      <div className="ltn__login-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">Your Account</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="account-login-inner">
                <div className="ltn__form-box contact-form-box">
                  <input disabled type="text" name="firstname" placeholder="First Name" value={userData.firstname} readOnly />

                  <input disabled type="text" name="lastname" placeholder="Last Name" value={userData.lastname} readOnly />

                  <input disabled type="text" name="email" placeholder="Email*" value={userData.email} readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myaccountdetail;
