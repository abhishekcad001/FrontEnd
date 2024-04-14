import React, { useState, useEffect } from "react";
import axios from "axios";

const SaveDetail = () => {
  const [wishList, setWishList] = useState([]);
  const token = JSON.parse(localStorage.getItem("UserToken"));

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/get/wishList", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log("******", response.data.data);
        setWishList(response?.data?.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishList();
  }, [token]);

  const removeFromWishList = async (productId) => {
    console.log("----",productId)
    try {
      await axios.delete(`http://localhost:5000/api/user/remove/wishList/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

     window.location.reload()
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <>
      <div className="liton__wishlist-area mb-105">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table table-responsive">
                  <table className="table">
                    <tbody>
                      {wishList.map((item, index) => (
                        <tr key={index}>
                          <td className="cart-product-image">
                            <button to={`/product-details/${item.productId}`}>
                              <img src={item?.homeId?.photos[0]?.url} alt={item.productName} />
                            </button>
                          </td>
                          <td className="cart-product-info">
                            <h4 className="go-top">
                              <button to={`/product-details/${item.productId}`}>
                                {item?.homeId?.title}
                              </button>
                            </h4>
                          </td>
                          <td className="cart-product-price">${item?.homeId?.price}</td>
                          <td className="cart-product-add-cart">
                            <button
                              className="submit-button-1"
                              onClick={() => removeFromWishList(item?._id)}
                              title="Remove from Wishlist"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveDetail;
