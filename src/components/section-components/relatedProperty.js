import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RelatedProperty = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const history = useHistory();
  const [allProperty, setAllProperty] = useState([]);

  useEffect(() => {
    getAllProperty();
  }, []);

  const token = JSON.parse(localStorage.getItem("UserToken"));

  const getAllProperty = async () => {
    try {
      console.log("first", token);
      const response = await axios.get("http://localhost:5000/api/user/View_All_List", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("==", response.data.data);
      setAllProperty(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Handle error gracefully, e.g., display a message to the user
    }
  };
  const handleDetail = (id) => {
    history.push(`/Property-details?id=${id}`);
  };
  return (
    <>
      <div className=" ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h1 className="section-title">Leatest Listings </h1>
              </div>
            </div>
          </div>
          <div className="row ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {allProperty.map((property) => (
              <div key={property.id} className="col-lg-4 col-sm-6 col-12" onClick={() => handleDetail(property.id)}>
                <Link to="/Property-details">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/Property-details">
                        <img src={property.photos[0].url} alt="#" width="450px" height="250px" />
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Rent</li>
                        </ul>
                      </div>
                      <h2 className="product-title go-top">
                        <Link to="/Property-details">{property.title}</Link>
                      </h2>
                      <div className="product-img-location">
                        <ul>
                          <li className="go-top">
                            <Link to="/contact">
                              <i className="flaticon-pin" /> {property.floor_no} {property.address}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li>
                          Bedrooms :<span>{property?.badrooms} </span>
                        </li>
                        <li>
                          Bathrooms :<span>{property?.bathrooms} </span>
                        </li>
                        <li>
                          square Ft :<span>{property?.size} </span>
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>$ {property.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProperty;
