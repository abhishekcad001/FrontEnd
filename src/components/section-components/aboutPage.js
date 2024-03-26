import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src={publicUrl + "assets/img/others/13.png"} alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
                  <h1 className="section-title">
                    The Leading Real Estate Rental Marketplace<span>.</span>
                  </h1>
                  <p>
                    Over 39,000 people work for us in more than 70 countries all over the This breadth of global
                    coverage, combined with specialist services
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2" />
                    Smart Home Design
                  </li>
                  <li>
                    <i className="flaticon-mountain" />
                    Beautiful Scene Around
                  </li>
                  <li>
                    <i className="flaticon-heart" />
                    Exceptional Lifestyle
                  </li>
                  <li>
                    <i className="flaticon-secure" />
                    Complete 24/7 Security
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    "Enimad minim veniam quis nostrud exercitation <br />
                    llamco laboris. Lorem ipsum dolor sit amet"{" "}
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link to="/service" className="theme-btn-1 btn btn-effect-1">
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our team  */}
      <div className="ltn__team-area pt-115 pb-90 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Team</h6>
                <h1 className="section-title">Property Agents</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__team-item ltn__team-item-3---">
                <div className="team-img">
                  <img src={publicUrl + "assets/img/team/4.jpg"} alt="Image" />
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Rosalina D. William</Link>
                  </h4>
                  <h6 className="ltn__secondary-color">Real Estate Broker</h6>
                  <div className="ltn__social-media">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__team-item ltn__team-item-3---">
                <div className="team-img">
                  <img src={publicUrl + "assets/img/team/2.jpg"} alt="Image" />
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Kelian Anderson</Link>
                  </h4>
                  <h6 className="ltn__secondary-color">Selling Agents</h6>
                  <div className="ltn__social-media">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__team-item ltn__team-item-3---">
                <div className="team-img">
                  <img src={publicUrl + "assets/img/team/5.jpg"} alt="Image" />
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Miranda H. Halim</Link>
                  </h4>
                  <h6 className="ltn__secondary-color">Property Seller</h6>
                  <div className="ltn__social-media">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* similer items */}

    </>
  );
};

export default AboutPage;
