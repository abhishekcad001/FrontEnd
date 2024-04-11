import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Property_All_Detail = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [details, setDetails] = useState({});

  let params = useParams();
  // Check what's inside params object
  let { id } = params;

  const token = JSON.parse(localStorage.getItem("UserToken"));

  const getPropertyDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/user/view_Single_All_List/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(":::::::::::::::::::::::::::::::::::::", response.data.data);
      setDetails(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Handle error gracefully, e.g., display a message to the user
    }
  };

  useEffect(() => {
    getPropertyDetail();
  }, []);
  return (
    <div>
      <div className="ltn__img-slider-area mb-90">
        <div className="container-fluid">
          <div className="row ">
            {/* {details?.photos?.map((photo) => (
              <div className="col-lg-12">
                <div className="ltn__img-slide-item-4">
                  <a href={photo?.url} data-rel="lightcase:myCollection">
                    <img src={photo?.url} alt="Image" />
                  </a>
                </div>
              </div>
            ))} */}

            <AutoplaySlider play={true} interval={3000}>
              {details?.photos?.map((photo) => (
                <div data-src={photo?.url} />
              ))}
            </AutoplaySlider>
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
                      <Link className="bg-orange" to="#">
                        For Rent
                      </Link>
                    </li>
                    <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt" />
                      {details?.available_from}
                    </li>
                  </ul>
                </div>
                <h1>{details?.title}</h1>
                <label>
                  <span className="ltn__secondary-color">
                    <i className="flaticon-pin" />
                  </span>{" "}
                  {details?.floor_no}
                  {details?.address}
                </label>
                <h4 className="title-2">Description</h4>
                <p>{details?.description}</p>

                <h4 className="title-2">Property Detail</h4>
                <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                  <ul>
                    <li>
                      <label>Property ID:</label> <span>{details?.id}</span>
                    </li>
                    <li>
                      <label>Home Area: </label> <span>{details?.size} sqft</span>
                    </li>
                    <li>
                      <label>Rooms:</label> <span>{details?.rooms}</span>
                    </li>
                    <li>
                      <label>Baths:</label> <span>{details?.bathrooms}</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <label>Lot Area:</label> <span>{details?.zip} </span>
                    </li>
                    <li>
                      <label>Lot dimensions:</label> <span>120 sqft</span>
                    </li>
                    <li>
                      <label>Beds:</label> <span>{details?.badrooms}</span>
                    </li>
                    <li>
                      <label>Price:</label> <span>${details?.price}/Month</span>
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
