import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FaqDetail = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div className="ltn__faq-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <div id="accordion_2">
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-1"
                      aria-expanded="false"
                    >
                      What are the lease terms for your rental properties?
                    </h6>
                    <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                      <div className="card-body">
                        <p>
                          Our lease terms typically range from 6 to 12 months, but we can discuss alternative
                          arrangements depending on your needs and the property in question.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-2"
                      aria-expanded="true"
                    >
                      How do I search for available rental homes on your website?
                    </h6>
                    <div id="faq-item-2-2" className="collapse show" data-bs-parent="#accordion_2">
                      <div className="card-body">
                        <p>
                          To search for available rental homes, simply navigate to our homepage and use the search bar
                          to input your desired location, budget, and any other preferences. You'll be presented with a
                          list of available properties matching your criteria.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-3"
                      aria-expanded="false"
                    >
                      What information do I need to provide to inquire about a rental property?
                    </h6>
                    <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                      <div className="card-body">
                        <p>
                          When inquiring about a rental property, we typically require your full name, contact
                          information, employment status, and any other relevant details that might help us assess your
                          suitability as a tenant.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-4"
                      aria-expanded="false"
                    >
                      Are there any fees associated with applying for a rental property?
                    </h6>
                    <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                      <div className="card-body">
                        <p>
                          Yes, there may be an application fee to cover the cost of processing your rental application.
                          This fee is non-refundable and helps us cover expenses such as background checks and credit
                          reports.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-5"
                      aria-expanded="false"
                    >
                      Can I schedule a viewing of the rental property before applying?
                    </h6>
                    <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                      <div className="card-body">
                        <p>
                          Absolutely! We encourage all potential tenants to schedule viewings of our rental properties
                          before applying. You can do so by contacting our leasing office and arranging a convenient
                          time for a viewing.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-6"
                      aria-expanded="false"
                    >
                      What is the rental application process like?
                    </h6>
                    <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                      <div className="card-body">
                        <p>
                          Our rental application process involves completing an application form, undergoing a
                          background and credit check, providing proof of income, and possibly providing references from
                          previous landlords.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-7"
                      aria-expanded="false"
                    >
                      Are utilities included in the rent?
                    </h6>
                    <div id="faq-item-2-7" className="collapse" data-bs-parent="#accordion_2">
                      <div className="card-body">
                        <p>
                          This varies depending on the property. Some rentals include utilities, while others require
                          tenants to pay for utilities separately. You can find this information listed on each
                          property's listing page.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="need-support text-center mt-100">
                  <h2>Still need help? Reach out to support 24/7:</h2>
                  <div className="btn-wrapper mb-30 go-top">
                    <Link to="/contact" className="theme-btn-1 btn">
                      Contact Us
                    </Link>
                  </div>
                  <h3>
                    <i className="fas fa-phone" /> +1 123-456-7891
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area ltn__right-sidebar">
                {/* Newsletter Widget */}
                <div className="widget ltn__search-widget ltn__newsletter-widget">
                  <h6 className="ltn__widget-sub-title">// subscribe</h6>
                  <h4 className="ltn__widget-title">Get Newsletter</h4>
                  <form action="#">
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                  <div className="ltn__newsletter-bg-icon">
                    <i className="fas fa-envelope-open-text" />
                  </div>
                </div>
                {/* Banner Widget */}
                <div className="widget ltn__banner-widget go-top">
                  <Link to="shop.html">
                    <img src={publicUrl + "assets/img/banner/banner-3.jpg"} alt="Banner Image" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqDetail;
