import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";

class NavbarV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
          <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                          <i className="icon-mail" /> abcd@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="locations.html">
                          <i className="icon-placeholder" /> 299,Doon valley Drive
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="top-bar-right text-end">
                    <div className="ltn__top-bar-menu">
                      <ul>
                        <li>
                          <Social />
                        </li>
                        <li>
                          {/* <div className="header-top-btn">
							 <Link to="/add-listing">Add Listing</Link>
						 </div> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                          {/* <li className="menu-icon">
                            <Link to="/about">About</Link>
                           
                          </li>
                          <li className="menu-icon">
                            <Link to="/shop">Shop</Link>
                            
                          </li>
                          <li className="menu-icon">
                            <Link to="/blog-grid">News</Link>
                        
                          </li>
                          <li className="menu-icon">
                            <Link to="#">Pages</Link>
                           
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li> */}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                  {/* header-search-1 */}
                  <div className="header-search-wrap">
                    <div className="header-search-1">
                      <div className="search-icon">
                        <i className="icon-search for-search-show" />
                        <i className="icon-cancel  for-search-close" />
                      </div>
                    </div>
                    <div className="header-search-1-form">
                      <form id="#" method="get" action="#">
                        <input type="text" name="search" defaultValue placeholder="Search here..." />
                        <button type="submit">
                          <span>
                            <i className="icon-search" />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* user-menu */}
                  <div className="ltn__drop-menu user-menu">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="icon-user" />
                        </Link>
                        <ul className="go-top">
                          <li>
                            <Link to="/login">Sign in</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            <Link to="/my-account">My Account</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* mini-cart */}
                  {/* <div className="mini-cart-icon">
                    <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                      <i className="icon-shopping-cart"></i>
                      <sup>2</sup>
                    </a>
                  </div> */}
                  {/* mini-cart */}


                  {/* Mobile Menu Button */}
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
                  <Link to="/about">About</Link>
                 
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                  
                </li>
                <li>
                  <Link to="/blog-grid">News</Link>
                 
                </li>
                <li>
                  <Link to="#">Pages</Link>
                 
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                <li>
                  <Link to="/my-account" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="far fa-user" />
                    </span>
                    My Account
                  </Link>
                </li>
                {/* <li>
                  <Link to="/wishlist" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart" />
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart" title="Shoping Cart">
                    <span className="utilize-btn-icon">
                      <i className="fas fa-shopping-cart" />
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </Link>
                </li> */}
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
  }
}

export default NavbarV2;
