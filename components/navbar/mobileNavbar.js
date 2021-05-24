function mobileNavbar() {
    return (
        <div>
              <div classNameName="mobilemenu">
      <div classNameNameName="mobilemenu__backdrop"></div>
      <div classNameName="mobilemenu__body">
        <div classNameName="mobilemenu__header">
          <div classNameName="mobilemenu__title">Menu</div>
          <button type="button" classNameName="mobilemenu__close">
            <svg width="20px" height="20px">
              <use xlink:href="images/sprite.svg#cross-20"></use>
            </svg>
          </button>
        </div>
        <div classNameName="mobilemenu__content">
          <ul
            classNameName="mobile-links mobile-links--level--0"
            data-collapse
            data-collapse-opened-classNameName="mobile-links__item--open"
          >
            <li classNameName="mobile-links__item" data-collapse-item>
              <div classNameName="mobile-links__item-title">
                <a href="index.html" classNameName="mobile-links__item-link">Home</a>
                <button
                  classNameName="mobile-links__item-toggle"
                  type="button"
                  data-collapse-trigger
                >
                  <svg
                    classNameName="mobile-links__item-arrow"
                    width="12px"
                    height="7px"
                  >
                    <use
                      xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                    ></use>
                  </svg>
                </button>
              </div>

            </li>
            <li classNameName="mobile-links__item" data-collapse-item>
              <div classNameName="mobile-links__item-title">
                <a href="#" classNameName="mobile-links__item-link">Categories</a>
                <button
                  classNameName="mobile-links__item-toggle"
                  type="button"
                  data-collapse-trigger
                >
                  <svg
                    classNameName="mobile-links__item-arrow"
                    width="12px"
                    height="7px"
                  >
                    <use
                      xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                    ></use>
                  </svg>
                </button>
              </div>
              <div classNameName="mobile-links__item-sub-links" data-collapse-content>
                <ul classNameName="mobile-links mobile-links--level--1">
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">

                      <a href="#" classNameName="mobile-links__item-link"
                        >
                        <svg
                        classNameName="departments__button-icon"
                        width="18px"
                        height="14px"
                      >
                        <use xlink:href="{{URL::to('assets')}}/images/sprite.svg#menu-18x14"></use>
                      </svg>Apparels</a
                      >
                      <button
                        classNameName="mobile-links__item-toggle"
                        type="button"
                        data-collapse-trigger
                      >
                        <svg
                          classNameName="mobile-links__item-arrow"
                          width="12px"
                          height="7px"
                        >
                          <use
                            xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                          ></use>
                        </svg>
                      </button>
                    </div>
                    <div
                      classNameName="mobile-links__item-sub-links"
                      data-collapse-content
                    >
                      <ul classNameName="mobile-links mobile-links--level--2">
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Men's</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Women's</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Kid</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Sports</a
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="#" classNameName="mobile-links__item-link"
                        >Machine Tools</a
                      >
                      <button
                        classNameName="mobile-links__item-toggle"
                        type="button"
                        data-collapse-trigger
                      >
                        <svg
                          classNameName="mobile-links__item-arrow"
                          width="12px"
                          height="7px"
                        >
                          <use
                            xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                          ></use>
                        </svg>
                      </button>
                    </div>
                    <div
                      classNameName="mobile-links__item-sub-links"
                      data-collapse-content
                    >
                      <ul classNameName="mobile-links mobile-links--level--2">
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Thread Cutting</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Chip Blowers</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Sharpening Machines</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Pipe Cutters</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Slotting machines</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a href="#" classNameName="mobile-links__item-link"
                              >Lathes</a
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li classNameName="mobile-links__item" data-collapse-item>
              <div classNameName="mobile-links__item-title">
                <a
                  href="shop-grid-3-columns-sidebar.html"
                  classNameName="mobile-links__item-link"
                  >Shop</a
                >
                <button
                  classNameName="mobile-links__item-toggle"
                  type="button"
                  data-collapse-trigger
                >
                  <svg
                    classNameName="mobile-links__item-arrow"
                    width="12px"
                    height="7px"
                  >
                    <use
                      xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                    ></use>
                  </svg>
                </button>
              </div>
              <div classNameName="mobile-links__item-sub-links" data-collapse-content>
                <ul classNameName="mobile-links mobile-links--level--1">
                
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="shop-list.html" classNameName="mobile-links__item-link"
                        >Shop List</a
                      >
                    </div>
                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a
                        href="shop-right-sidebar.html"
                        classNameName="mobile-links__item-link"
                        >Shop Right Sidebar</a
                      >
                    </div>
                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="product.html" classNameName="mobile-links__item-link"
                        >Product</a
                      >
                      <button
                        classNameName="mobile-links__item-toggle"
                        type="button"
                        data-collapse-trigger
                      >
                        <svg
                          classNameName="mobile-links__item-arrow"
                          width="12px"
                          height="7px"
                        >
                          <use
                            xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                          ></use>
                        </svg>
                      </button>
                    </div>
                    <div
                      classNameName="mobile-links__item-sub-links"
                      data-collapse-content
                    >
                      <ul classNameName="mobile-links mobile-links--level--2">
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a
                              href="product.html"
                              classNameName="mobile-links__item-link"
                              >Product</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a
                              href="product-alt.html"
                              classNameName="mobile-links__item-link"
                              >Product Alt</a
                            >
                          </div>
                        </li>
                        <li classNameName="mobile-links__item" data-collapse-item>
                          <div classNameName="mobile-links__item-title">
                            <a
                              href="product-sidebar.html"
                              classNameName="mobile-links__item-link"
                              >Product Sidebar</a
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="cart.html" classNameName="mobile-links__item-link"
                        >Cart</a
                      >
                    </div>

                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="checkout.html" classNameName="mobile-links__item-link"
                        >Checkout</a
                      >
                    </div>
                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="wishlist.html" classNameName="mobile-links__item-link"
                        >Wishlist</a
                      >
                    </div>
                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="compare.html" classNameName="mobile-links__item-link"
                        >Compare</a
                      >
                    </div>
                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="account.html" classNameName="mobile-links__item-link"
                        >My Account</a
                      >
                    </div>
                  </li>
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a href="track-order.html" classNameName="mobile-links__item-link"
                        >Track Order</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li classNameName="mobile-links__item" data-collapse-item>
              <div classNameName="mobile-links__item-title">
                <a href="blog-classNameNameic.html" classNameName="mobile-links__item-link"
                  >Blog</a
                >
                <button
                  classNameName="mobile-links__item-toggle"
                  type="button"
                  data-collapse-trigger
                >
                  <svg
                    classNameName="mobile-links__item-arrow"
                    width="12px"
                    height="7px"
                  >
                    <use
                      xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                    ></use>
                  </svg>
                </button>
              </div>
              <div classNameName="mobile-links__item-sub-links" data-collapse-content>
                <ul classNameName="mobile-links mobile-links--level--1">
                  <li classNameName="mobile-links__item" data-collapse-item>
                    <div classNameName="mobile-links__item-title">
                      <a
                        href="blog-classNameic.html"
                        className="mobile-links__item-link"
                        >Blog classNameic</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="blog-grid.html" className="mobile-links__item-link"
                        >Blog Grid</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="blog-list.html" className="mobile-links__item-link"
                        >Blog List</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a
                        href="blog-left-sidebar.html"
                        className="mobile-links__item-link"
                        >Blog Left Sidebar</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="post.html" className="mobile-links__item-link"
                        >Post Page</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a
                        href="post-without-sidebar.html"
                        className="mobile-links__item-link"
                        >Post Without Sidebar</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
                <a href="#" className="mobile-links__item-link">Pages</a>
                <button
                  className="mobile-links__item-toggle"
                  type="button"
                  data-collapse-trigger
                >
                  <svg
                    className="mobile-links__item-arrow"
                    width="12px"
                    height="7px"
                  >
                    <use
                      xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                    ></use>
                  </svg>
                </button>
              </div>
              <div className="mobile-links__item-sub-links" data-collapse-content>
                <ul className="mobile-links mobile-links--level--1">
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="about-us.html" className="mobile-links__item-link"
                        >About Us</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="contact-us.html" className="mobile-links__item-link"
                        >Contact Us</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a
                        href="contact-us-alt.html"
                        className="mobile-links__item-link"
                        >Contact Us Alt</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="404.html" className="mobile-links__item-link">404</a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a
                        href="terms-and-conditions.html"
                        className="mobile-links__item-link"
                        >Terms And Conditions</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="faq.html" className="mobile-links__item-link">FAQ</a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="components.html" className="mobile-links__item-link"
                        >Components</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="typography.html" className="mobile-links__item-link"
                        >Typography</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
                <a data-collapse-trigger className="mobile-links__item-link"
                  >Currency</a
                >
                <button
                  className="mobile-links__item-toggle"
                  type="button"
                  data-collapse-trigger
                >
                  <svg
                    className="mobile-links__item-arrow"
                    width="12px"
                    height="7px"
                  >
                    <use
                      xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                    ></use>
                  </svg>
                </button>
              </div>
              <div className="mobile-links__item-sub-links" data-collapse-content>
                <ul className="mobile-links mobile-links--level--1">
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link">€ Euro</a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"
                        >£ Pound Sterling</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"
                        >Rs. US Dollar</a
                      >
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"
                        >Rs. Nepali Rupees</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
                <a data-collapse-trigger className="mobile-links__item-link"
                  >Language</a
                >
                <button
                  className="mobile-links__item-toggle"
                  type="button"
                  data-collapse-trigger
                >
                  <svg
                    className="mobile-links__item-arrow"
                    width="12px"
                    height="7px"
                  >
                    <use
                      xlink:href="images/sprite.svg#arrow-rounded-down-12x7"
                    ></use>
                  </svg>
                </button>
              </div>
              <div className="mobile-links__item-sub-links" data-collapse-content>
                <ul className="mobile-links mobile-links--level--1">
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link">English</a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link">Nepali</a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link">German</a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link">Russian</a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link">Italian</a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </div>
    )
}

export default mobileNavbar
