import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
const AllProperties = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const history = useHistory();
  const [allProperty, setAllProperty] = useState([]);

  useEffect(() => {
    getAllProperty();
  }, []);

  const token = JSON.parse(localStorage.getItem("UserToken"));

  const getAllProperty = async () => {
    try {

      const response = await axios.get("http://localhost:5000/api/user/View_All_List", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setAllProperty(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Handle error gracefully, e.g., display a message to the user
    }
  };
  const handleDetail = (id) => {
    history.push(`/Property-details/${id}`);
  };
  
  const handleSave = async (homeId) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/wishList",
        { homeId: homeId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("saved successfully  ");
    } catch (error) {
      console.error("Error saving to wishlist:", error);
    }
  };
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
                      <div className="col-lg-12">
                        {/* Search Widget */}
                        <div className="ltn__search-widget mb-30">
                          <form action="#">
                            <input type="text" name="search" placeholder="Search your keyword..." />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                      {allProperty.map((property) => (
                        <div
                          key={property.id}
                          className="col-lg-4 col-sm-6 col-12"
                         
                        >
                          
                            <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                              <div className="product-img"  onClick={() => handleDetail(property.id)}>
                                
                                  <img src={property.photos[0].url} alt="#" width="450px" height="250px" />
                               
                              </div>
                              <div className="product-info">
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badg">For Rent</li>
                                  </ul>
                                </div>
                                <h2 className="product-title go-top">
                                {property.title}
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
                                      <a
                                       
                                        onClick={()=>handleSave(property.id)}
                                      >
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
                          
                        </div>
                      ))}
                    </div>
                    <div className="ltn__pagination-area text-center">
                      <div className="ltn__pagination">
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-double-left" />
                            </Link>
                          </li>
                          <li className="active">
                            <Link to="#">1</Link>
                          </li>
                          <li>
                            <Link to="#">2</Link>
                          </li>
                          <li>
                            <Link to="#">3</Link>
                          </li>
                          <li>
                            <Link to="#">...</Link>
                          </li>
                          <li>
                            <Link to="#">10</Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-double-right" />
                            </Link>
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
    </>
  );
};

export default AllProperties;
