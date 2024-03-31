import React from "react";

const ContectDetail = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src={publicUrl + "assets/img/icons/10.png"} alt="Icon Image" />
                </div>
                <h3>Email Address</h3>
                <p>
                  abhishek@gmail.com <br />
                  jay@gmail.com <br />
                  harsh@gmail.com <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src={publicUrl + "assets/img/icons/11.png"} alt="Icon Image" />
                </div>
                <h3>Phone Number</h3>
                <p>
                  +0123-456789 <br /> +1 87-6543210 <br /> +1 236-451-2145
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src={publicUrl + "assets/img/icons/12.png"} alt="Icon Image" />
                </div>
                <h3>Office Address</h3>
                <p>
                  299 Doon Vally
                  <br />
                  kitchener ON
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.3961666099176!2d-80.40700802338011!3d43.38964836943596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9018e9e89adf%3A0x2043c24369ede07e!2sConestoga%20College%20Kitchener%20-%20Doon%20Campus!5e0!3m2!1sen!2sca!4v1709908641276!5m2!1sen!2sca"
          width="100%"
          height="100%"
          frameBorder={0}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </>
  );
};

export default ContectDetail;
