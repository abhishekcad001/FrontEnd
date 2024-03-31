import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const history = useHistory();
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userEmail = localStorage.getItem("UserEmail");
    if (userEmail) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const handleLogout = () => {
    // Remove userEmail from local storage
    localStorage.removeItem("User");
    // Update isLoggedIn state to false
    setIsLoggedIn(false);
    history.push("/login");
  };
  const user = JSON.parse(localStorage.getItem("User"));
  console.log("first",user)
  return (
    <div>
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo go-top">
                    <Link to="/">
                      <img width="100px" src={publicUrl + "assets/img/LOG1.png"} alt="Logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu go-top">
                      <ul>
                        <li className="menu-icon">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-icon">
                          <Link to="/Properties">Listing</Link>
                        </li>
                        <li className="menu-icon">
                          <Link to="/Aboutus">About</Link>
                        </li>

                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="icon-user" />
                      </Link>
                      <ul className="go-top">
                        {!isLoggedIn ? (
                          <>
                            <li>
                              <Link to="/login">Sign in</Link>
                            </li>
                            <li>
                              <Link to="/register">Register</Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link to="/my-account">My Account</Link>
                            </li>
                            <li>
                              <Link to="#" onClick={() => handleLogout()}>
                                Logout
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                    <li><h6> {user?.firstName}</h6></li>
                  </ul>
                </div>

                <div className="mobile-menu-toggle d-xl-none">
                  <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action={"#"}>
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <Link to="/#">About</Link>
              </li>
              <li>
                <Link to="/#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              {isLoggedIn && (
                <>
                  <li>
                    <Link to="/my-account" title="My Account">
                      <span className="utilize-btn-icon">
                        <i className="far fa-user" />
                      </span>
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handleLogout()}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
