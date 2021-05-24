import {Fragment} from "react"

function DesktopNavbar() {
    return (
        <Fragment>
             <header className="site__header d-lg-block d-none">
        <div className="site-header">
   
          <div className="site-header__topbar topbar">
            <div className="topbar__container container">
              <div className="topbar__row">
           
                <div className="topbar__spring"></div>
                <div className="topbar__item">

                    <button className="topbar-dropdown__btn" type="button">
                        <div className="topbar__item topbar__item--link">
                            <a className="topbar-link" href="">Dashboard</a>
                          </div>
                    </button>
             


                </div>
                <div className="topbar__item">
       

                    <div className="topbar__item topbar__item--link">
                        <a className="topbar-link" href="">Login</a>
                    </div>


    
                    <div className="topbar__item topbar__item--link">
                        <a className="topbar-link" href="">Register</a>
                      </div>



                    <div className="topbar__item topbar__item--link">
                        <a className="topbar-link" href="{{ url('seller/register') }}">Register As Seller</a>
                      </div>


                </div>

              </div>
            </div>
          </div>
     
          <div className="site-header__middle container">
            <div className="site-header__logo">
              <a href="{{url('/')}}">
                <img src="{{URL::to('assets')}}/images/logos/beta.png" 
                alt=""  />
              </a>
            </div>

            <div className="site-header__search">
                <div className="search search--location--header">
                    <div className="search__body">
                        <form className="search__form" action="">
              <select className="search__categories" name="category_id" aria-label="Category">
                <option value="all">All Categories</option>
              
                <option value=""></option>
            
            </select>
           
            <input className="search__input" name="search" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autocomplete="off"/> 
            <button className="search__button search__button--type--submit" type="submit">
                <svg width="20px" height="20px"></svg></button><div className="search__border">
                
                    <div className="search__suggestions suggestions suggestions--location--header"></div>
                  
                    </div>
                  
            <div className="site-header__phone">
              <div className="site-header__phone-title">Customer Service</div>
              <div className="site-header__phone-number">+977 43-90161</div>
            </div>
            </form>
          </div>
          <div className="site-header__nav-panel">
            <div className="nav-panel">
              <div className="nav-panel__container container">
                <div className="nav-panel__row">
                  <div className="nav-panel__departments">
                  
                    <div
                      className="departments departments--opened departments--fixed"
                      data-departments-fixed-by=".block-slideshow"
                    >
                      <div className="departments__body">
                        <div className="departments__links-wrapper">
                          <ul className="departments__links">

                            <li
                              className="departments__item departments__item--menu"
                            >
                              <a href="#">
                                <img
                                src=" {{URL::to('uploads/categories/'.$category->image)}}"
                                alt=""
                                width="23px"
                                height="23px"
                            />
                             
                                <svg
                                  className="departments__link-arrow"
                                  width="6px"
                                  height="9px"
                                >
                                
                                </svg>
                              </a>
                              <div className="departments__menu">

                                <ul className="menu menu--layout--classNameic">

                              
									<li>
										<a href=""></a>
									</li>
								

                                </ul>
                              </div>
                            </li>
                         

                          </ul>
                        </div>
                      </div>
                      <button className="departments__button">
                        <svg
                          className="departments__button-icon"
                          width="18px"
                          height="14px"
                        >
                         
                        </svg>
                        <span >         Shop By Category</span>

                        <svg
                          className="departments__button-arrow"
                          width="9px"
                          height="6px"
                        >
                       
                        </svg>
                      </button>
                    </div>
                  
                  </div>
              
                  <div className="nav-panel__nav-links nav-links">
                    <ul className="nav-links__list">
                      <li className="nav-links__item nav-links__item--with-submenu">
                        <a href="">
                          <span >
                            Home
                            <svg
                              className="nav-links__arrow"
                              width="9px"
                              height="6px"
                            >
                             
                            </svg>
                          </span>
                        </a>

                      </li>
                      <li className="nav-links__item nav-links__item--with-submenu">
                      
                      <li className="nav-links__item nav-links__item--with-submenu">
                        <a href="shop-grid-3-columns-sidebar.html">
                          <span  >
                            Shop
                            <svg
                              className="nav-links__arrow"
                              width="9px"
                              height="6px"
                            >
                            
                            </svg>
                          </span>
                        </a>
                        <div className="nav-links__menu">
                       
                          <ul className="menu menu--layout--classNameic">

                            <li><a href="{{route('shop')}}">Shop List</a></li>
                          
                            <li>
                              <a href="">
                                Product
                                <svg
                                  className="menu__arrow"
                                  width="6px"
                                  height="9px"
                                >
                                 
                                </svg>
                              </a>

                            </li>
                            <li><a href="{{ route('cart')}}">Cart</a></li>
                            <li><a href="{{route('checkout')}}">Checkout</a></li>
                            <li><a href="{{route('wishlist')}}">Wishlist</a></li>
                         
                            <li><a href="{{route('login')}}">My Account</a></li>
                            <li><a href="track-order.html">Track Order</a></li>
                          </ul>
                       
                        </div>
                      </li>
                      <li className="nav-links__item nav-links__item--with-submenu">
                        <a href="blog-classNameic.html">
                          <span >
                           How to buy
                            <svg
                              className="nav-links__arrow"
                              width="9px"
                              height="6px"
                            >
                             
                            </svg>
                          </span>
                        </a>
                       
                      </li>

                      <li className="nav-links__item nav-links__item--with-submenu">
                        <a href="blog-classNameic.html">
                          <span>
                            How to sell
                            <svg
                              className="nav-links__arrow"
                              width="9px"
                              height="6px"
                            >
                            
                            </svg>
                          </span>
                        </a>
                       
                      </li>
                      <li className="nav-links__item nav-links__item--with-submenu">
                        <a href="blog-classNameic.html">
                          <span >
                            Blog
                            <svg
                              className="nav-links__arrow"
                              width="9px"
                              height="6px"
                            >
                            
                            </svg>
                          </span>
                        </a>

                      <li className="nav-links__item">
                        <a href=""><span>Contact Us</span></a>
                      </li>

                    </li>
                    </li>
                    </ul>
                 
           
             
                  </div>
               
                
                  <div className="nav-panel__indicators">
                    <div className="indicator">
                      <a href="wishlist.html" className="indicator__button">
                        <span className="indicator__area">
                          <svg width="20px" height="20px">
                          
                          </svg>
                          <span className="indicator__value">0</span>
                        </span>
                      </a>
                    </div>
                    <div className="indicator indicator--trigger--click">
                      <a href="{{ route('product.shoppingCart')}}" className="indicator__button">
                        <span className="indicator__area">
                          <svg width="20px" height="20px">
                       
                          </svg>
                          <span className="indicator__value"></span>
                        </span>
                      </a>
                      <div className="indicator__dropdown">
                    
                        <div className="dropcart">
                          <div className="dropcart__products-list">

                            <div className="dropcart__product">
                              <div className="dropcart__product-image">
                                <a href="product.html"
                                  ><img
                                    src=" {{URL::to('assets')}}/images/products/product-1.png"
                                    alt=""
                                /></a>
                              </div>
                              <div className="dropcart__product-info">
                                <div className="dropcart__product-name">
                                  <a href="product.html"
                                    >Jersey</a
                                  >
                                </div>
                                <ul className="dropcart__product-options">
                                  <li>Color: Yellow</li>
                                  <li>Material: Aluminium</li>
                                </ul>
                                <div className="dropcart__product-meta">
                                  <span className="dropcart__product-quantity"
                                    >2</span
                                  >
                                  x
                                  <span className="dropcart__product-price"
                                    >Rs.699.00</span
                                  >
                                </div>
                              </div>
                              <button
                                type="button"
                                className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon"
                              >
                                <svg width="10px" height="10px">
                                 
                                </svg>
                              </button>
                            </div>





                          </div>
                          <div className="dropcart__totals">
                            <table>
                              <tr>
                                <th>Subtotal</th>
                                <td>Rs.0.00</td>
                              </tr>
                              <tr>
                                <th>Shipping</th>
                                <td>Rs.0.00</td>
                              </tr>
                              <tr>
                                <th>Tax</th>
                                <td>Rs.0.00</td>
                              </tr>
                              <tr>
                                <th>Total</th>
                                <td>Rs.0.00</td>
                              </tr>
                            </table>
                          </div>
                          <div className="dropcart__buttons">
                            <a className="btn btn-secondary" href="{{('api/cart')}}"
                              >View Cart</a
                            >
                            <a className="btn btn-primary" href="{{route('checkout')}}"
                              >Checkout</a
                            >
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
        </div>
        </div>
        
      </header>

            
        </Fragment>
    )
}

export default DesktopNavbar
