import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Property_All_Detail = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div>
      <div className="ltn__img-slider-area mb-90">
        <div className="container-fluid">
          <div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-4">
                <a
                  href="https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  data-rel="lightcase:myCollection"
                >
                  <img
                    src="https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-4">
                <a
                  href="https://plus.unsplash.com/premium_photo-1661293935605-0619fd94cf03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  data-rel="lightcase:myCollection"
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661293935605-0619fd94cf03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-4">
                <a
                  href="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  data-rel="lightcase:myCollection"
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-4">
                <a
                  href="https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  data-rel="lightcase:myCollection"
                >
                  <img
                    src="https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-4">
                <a
                  href="https://images.unsplash.com/photo-1530334580314-1e7a340426a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  data-rel="lightcase:myCollection"
                >
                  <img
                    src="https://images.unsplash.com/photo-1530334580314-1e7a340426a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__shop-details-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-category">
                      <Link to="#">Featured</Link>
                    </li>
                    <li className="ltn__blog-category">
                      <Link className="bg-orange" to="#">
                        For Rent
                      </Link>
                    </li>
                    <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt" />
                      May 19, 2021
                    </li>
                  </ul>
                </div>
                <h1>Lorem Ipsum</h1>
                <label>
                  <span className="ltn__secondary-color">
                    <i className="flaticon-pin" />
                  </span>{" "}
                  299, Doon vally
                </label>
                <h4 className="title-2">Description</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <h4 className="title-2">Property Detail</h4>
                <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                  <ul>
                    <li>
                      <label>Property ID:</label> <span>HZ29</span>
                    </li>
                    <li>
                      <label>Home Area: </label> <span>120 sqft</span>
                    </li>
                    <li>
                      <label>Rooms:</label> <span>7</span>
                    </li>
                    <li>
                      <label>Baths:</label> <span>2</span>
                    </li>
                    <li>
                      <label>Year built:</label> <span>1992</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <label>Lot Area:</label> <span>HZ29 </span>
                    </li>
                    <li>
                      <label>Lot dimensions:</label> <span>120 sqft</span>
                    </li>
                    <li>
                      <label>Beds:</label> <span>7</span>
                    </li>
                    <li>
                      <label>Price:</label> <span>2</span>
                    </li>
                    <li>
                      <label>Property Status:</label> <span>For Sale</span>
                    </li>
                  </ul>
                </div>
                <h4 className="title-2">Facts and Features</h4>
                <div className="property-detail-feature-list clearfix mb-45">
                  <ul>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Living Room</h6>
                          {/* <small>20 x 16 sq feet</small> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Garage</h6>
                          {/* <small>20 x 16 sq feet</small> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Dining Area</h6>
                          {/* <small>20 x 16 sq feet</small> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Bedroom</h6>
                          {/* <small>20 x 16 sq feet</small> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Bathroom</h6>
                          {/* <small>20 x 16 sq feet</small> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Gym Area</h6>
                          {/* <small>20 x 16 sq feet</small> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Garden</h6>
                          {/* <small>20 x 16 sq feet</small> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Parking</h6>
                          {/* <small>20 x 16 sq feet</small> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <h4 className="title-2">From Our Gallery</h4>

                <h4 className="title-2 mb-10">Amenities</h4>
                <div className="property-details-amenities mb-60">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          <li>
                            <label className="checkbox-item">
                              Air Conditioning
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Gym
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Microwave
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Swimming Pool
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              WiFi
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          <li>
                            <label className="checkbox-item">
                              Barbeque
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Recreation
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Microwave
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Basketball Cout
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Fireplace
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          <li>
                            <label className="checkbox-item">
                              Refrigerator
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Window Coverings
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Washer
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              24x7 Security
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="checkbox-item">
                              Indoor Game
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="title-2">Location</h4>
                <div className="property-details-google-map mb-60">
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

                
              </div>
            </div>
            {/* sidebar gose here  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property_All_Detail;
