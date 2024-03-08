import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AllProperties = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <div className="ltn__product-area ltn__product-gutter mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="ltn__shop-options">
                <ul>
                  <li>
                    <div className="ltn__grid-list-tab-menu ">
                      <div className="nav">
                        <a className="active show" data-bs-toggle="tab" href="#liton_product_grid">
                          <i className="fas fa-th-large" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_product_list">
                          <i className="fas fa-list" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Default sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by new arrivals</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="showing-product-number text-right">
                      <span>Showing 9 of 20 results</span>
                    </div>
                  </li>
                </ul>
              </div> */}
              <div className="tab-content ">
                <div className="tab-pane fade active show" id="liton_product_grid">
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 col-12">
                        <Link to="/Property-details">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img">
                              <Link to="/Property-details">
                                <img
                                  src={
                                    "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  }
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="product-info">
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badg">For Rent</li>
                                </ul>
                              </div>
                              <h2 className="product-title go-top">
                                <Link to="/Property-details">New Home Nice View</Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li className="go-top">
                                    <Link to="/contact">
                                      <i className="flaticon-pin" /> 299, Doon Mills Dr.
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bedrooms
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bathrooms
                                </li>
                                <li>
                                  <span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-bs-toggle="modal"
                                      data-bs-target="#liton_wishlist_modal"
                                    >
                                      <i className="flaticon-heart-1" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info-bottom">
                              <div className="product-price">
                                <span>
                                  $10,00,00,00,00,00<label>/Day</label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
 
                      <div className="col-lg-4 col-sm-6 col-12">
                        <Link to="/Property-details">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img">
                              <Link to="/Property-details">
                                <img
                                  src={
                                    "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  }
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="product-info">
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badg">For Rent</li>
                                </ul>
                              </div>
                              <h2 className="product-title go-top">
                                <Link to="/Property-details">New Home Nice View</Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li className="go-top">
                                    <Link to="/contact">
                                      <i className="flaticon-pin" /> 299, Doon Mills Dr.
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bedrooms
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bathrooms
                                </li>
                                <li>
                                  <span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-bs-toggle="modal"
                                      data-bs-target="#liton_wishlist_modal"
                                    >
                                      <i className="flaticon-heart-1" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info-bottom">
                              <div className="product-price">
                                <span>
                                  $10,00,00,00,00,00<label>/Day</label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-4 col-sm-6 col-12">
                        <Link to="/Property-details">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img">
                              <Link to="/Property-details">
                                <img
                                  src={
                                    "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  }
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="product-info">
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badg">For Rent</li>
                                </ul>
                              </div>
                              <h2 className="product-title go-top">
                                <Link to="/Property-details">New Home Nice View</Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li className="go-top">
                                    <Link to="/contact">
                                      <i className="flaticon-pin" /> 299, Doon Mills Dr.
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bedrooms
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bathrooms
                                </li>
                                <li>
                                  <span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-bs-toggle="modal"
                                      data-bs-target="#liton_wishlist_modal"
                                    >
                                      <i className="flaticon-heart-1" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info-bottom">
                              <div className="product-price">
                                <span>
                                  $10,00,00,00,00,00<label>/Day</label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-4 col-sm-6 col-12">
                        <Link to="/Property-details">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img">
                              <img
                                src={
                                  "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                                alt="#"
                              />
                            </div>
                            <div className="product-info">
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badg">For Rent</li>
                                </ul>
                              </div>
                              <h2 className="product-title go-top">
                                <Link to="/Property-details">New Home Nice View</Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li className="go-top">
                                    <Link to="/contact">
                                      <i className="flaticon-pin" /> 299, Doon Mills Dr.
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bedrooms
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bathrooms
                                </li>
                                <li>
                                  <span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-bs-toggle="modal"
                                      data-bs-target="#liton_wishlist_modal"
                                    >
                                      <i className="flaticon-heart-1" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info-bottom">
                              <div className="product-price">
                                <span>
                                  $10,00,00,00,00,00<label>/Day</label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-4 col-sm-6 col-12">
                        <Link to="/Property-details">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img">
                              <img
                                src={
                                  "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                                alt="#"
                              />
                            </div>
                            <div className="product-info">
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badg">For Rent</li>
                                </ul>
                              </div>
                              <h2 className="product-title go-top">
                                <Link to="/Property-details">New Home Nice View</Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li className="go-top">
                                    <Link to="/contact">
                                      <i className="flaticon-pin" /> 299, Doon Mills Dr.
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bedrooms
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bathrooms
                                </li>
                                <li>
                                  <span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-bs-toggle="modal"
                                      data-bs-target="#liton_wishlist_modal"
                                    >
                                      <i className="flaticon-heart-1" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info-bottom">
                              <div className="product-price">
                                <span>
                                  $10,00,00,00,00,00<label>/Day</label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="modal-product-img">
                          <img src={publicUrl + "assets/img/product/7.png"} alt="#" />
                        </div>
                        <div className="modal-product-info go-top">
                          <h5>
                            <Link to="/Property-details">Brake Conversion Kit</Link>
                          </h5>
                          <p className="added-cart">
                            <i className="fa fa-check-circle" /> Successfully added to your Wishlist
                          </p>
                          <div className="btn-wrapper">
                            <Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">
                              View Wishlist
                            </Link>
                          </div>
                        </div>
                        {/* additional-info */}
                        <div className="additional-info d-none">
                          <p>
                            We want to give you <b>10% discount</b> for your first order, <br /> Use discount code at
                            checkout
                          </p>
                          <div className="payment-method">
                            <img src={publicUrl + "assets/img/icons/payment.png"} alt="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ltn__modal-area ltn__quick-view-modal-area">
        <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  {/* <i class="fas fa-times"></i> */}
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="modal-product-img">
                          <img src={publicUrl + "assets/img/product/4.png"} alt="#" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="modal-product-info">
                          <div className="product-ratting">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star-half-alt" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="far fa-star" />
                                </a>
                              </li>
                              <li className="review-total">
                                {" "}
                                <a href="#"> ( 95 Reviews )</a>
                              </li>
                            </ul>
                          </div>
                          <h3>Brake Conversion Kit</h3>
                          <div className="product-price">
                            <span>$149.00</span>
                            <del>$165.00</del>
                          </div>
                          <div className="modal-product-meta ltn__product-details-menu-1">
                            <ul>
                              <li>
                                <strong>Categories:</strong>
                                <span className="go-top">
                                  <Link to="/blog">Parts</Link>
                                  <Link to="/blog">Car</Link>
                                  <Link to="/blog">Seat</Link>
                                  <Link to="/blog">Cover</Link>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="ltn__product-details-menu-2">
                            <ul>
                              <li>
                                <div className="cart-plus-minus">
                                  <input
                                    type="text"
                                    defaultValue="02"
                                    name="qtybutton"
                                    className="cart-plus-minus-box"
                                  />
                                </div>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="theme-btn-1 btn btn-effect-1"
                                  title="Add to Cart"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add_to_cart_modal"
                                >
                                  <i className="fas fa-shopping-cart" />
                                  <span>ADD TO CART</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <hr />
                          <div className="ltn__social-media">
                            <ul>
                              <li>Share:</li>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProperties;
