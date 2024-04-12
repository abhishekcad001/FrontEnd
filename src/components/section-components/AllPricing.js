import React from "react";

const AllPricing = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div>
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <h1> Free</h1>
                </div>
                <h3>$ 0.00 / Month</h3>
                <p>
                  Upto 2 Home Allow
                  <br />
                No  Measure Area feature <br />No Communication
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <h1>Starter</h1>
                </div>
                <h3>$ 20.00 / Month</h3>
                <p>
                  Upto 10 Home Allow
                  <br />
                  Measure Area feature <br /> Communication
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <h1>Enterprise</h1>
                </div>
                <h3>Custom</h3>
                <p>
                  Upto 100 Home Allow
                  <br />
                  Measure Area feature <br /> Communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPricing;
