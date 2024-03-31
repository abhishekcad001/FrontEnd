import React from "react";

const SaveDetail = () => {
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
                      <tr>
                        <td className="cart-product-image">
                          <button to="/product-details/">
                            <img src="" alt="#" />
                          </button>
                        </td>
                        <td className="cart-product-info">
                          <h4 className="go-top">
                            <button to="/product-details/">Brake Conversion Kit</button>
                          </h4>
                        </td>
                        <td className="cart-product-price">$85.00</td>

                        <td className="cart-product-add-cart">
                          <button
                            className="submit-button-1"
                            to="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-image">
                          <button to="/product-details/">
                            <img src="" alt="#" />
                          </button>
                        </td>
                        <td className="cart-product-info">
                          <h4 className="go-top">
                            <button to="/product-details/">Shock Mount Insulator</button>
                          </h4>
                        </td>
                        <td className="cart-product-price">$89.00</td>

                        <td className="cart-product-add-cart">
                          <button
                            className="submit-button-1"
                            to="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-image">
                          <button to="/product-details/">
                            <img src="" alt="#" />
                          </button>
                        </td>
                        <td className="cart-product-info">
                          <h4 className="go-top">
                            <button to="/product-details/">Tail Light Lens</button>
                          </h4>
                        </td>
                        <td className="cart-product-price">$149.00</td>

                        <td className="cart-product-add-cart">
                          <button
                            className="submit-button-1"
                            to="#"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
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
