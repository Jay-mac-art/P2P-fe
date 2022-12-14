import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
 
  useEffect(  () => {
   axios
      .get("http://localhost:3000/get/testimonials")
      .then((res) => { setData(res.data)})
      .catch((err) => console.log(err, "it has an error"));
     
     
    
    } ,[]);
    
  return (
    <div >
      <head>
        <title>Start | Landing Page for Startup and SaaS Business</title>

        <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png" />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="assets/css/slick.css" />

        <link rel="stylesheet" href="assets/css/LineIcons.css" />

        <link rel="stylesheet" href="assets/css/magnific-popup.css" />

        <link rel="stylesheet" href="assets/css/default.css" />

        <link rel="stylesheet" href="assets/css/style.css" />
      </head>
      <body>

        <header className="header-area">
          <div className="navgition navgition-transparent">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                      <img src="assets/images/logo.svg" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                      <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                          <a className="page-scroll" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#service">SERVICES</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#pricing">PRICING</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#contact">CONTACT</a>
                        </li>
                      </ul>
                    </div>
                    <div className="navbar-social d-none d-sm-flex align-items-center">
                      <span>FOLLOW US</span>
                      <ul>
                        <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                        <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                        <li><a href="#"><i className="lni-instagram-original"></i></a></li>
                        <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div id="home" className="header-hero bg_cover" style={{ backgroundImage: "url(assets/images/header-bg.jpg)" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <div className="header-content text-center">
                    <h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
                    <p className="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
                    <ul className="header-btn rounded-buttons">
                      <li><a className="main-btn rounded-three" href="#">GET IN TOUCH</a></li>
                      <li><a className="main-btn rounded-four video-popup" href="../../watch.html?v=r44RKWyfcFw">WATCH THE VIDEO <i className="lni-play"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-shape">
              <img src="assets/images/header-shape.svg" alt="shape" />
            </div>
          </div>
        </header>


        <section id="service" className="services-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title pb-10">
                  <h4 className="title">Crafted For</h4>
                  <p className="text">Stop wasting time and money designing and managing a website that doesn???t get results. Happiness guaranteed!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="services-content mt-40 d-sm-flex">
                      <div className="services-icon">
                        <i className="lni-bolt"></i>
                      </div>
                      <div className="services-content media-body">
                        <h4 className="services-title">Startup</h4>
                        <p className="text">Short description for the ones<br /> who look for something new.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-content mt-40 d-sm-flex">
                      <div className="services-icon">
                        <i className="lni-bar-chart"></i>
                      </div>
                      <div className="services-content media-body">
                        <h4 className="services-title">SaaS Business</h4>
                        <p className="text">Short description for the ones<br /> who look for something new.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-content mt-40 d-sm-flex">
                      <div className="services-icon">
                        <i className="lni-brush"></i>
                      </div>
                      <div className="services-content media-body">
                        <h4 className="services-title">Agency</h4>
                        <p className="text">Short description for the ones<br /> who look for something new.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-content mt-40 d-sm-flex">
                      <div className="services-icon">
                        <i className="lni-bulb"></i>
                      </div>
                      <div className="services-content media-body">
                        <h4 className="services-title">App Landing</h4>
                        <p className="text">Short description for the ones<br /> who look for something new.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-image d-lg-flex align-items-center">
            <div className="image">
              <img src="assets/images/services.png" alt="Services" />
            </div>
          </div>
        </section>


        <section id="pricing" className="pricing-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-10">
                  <h4 className="title">Our Pricing</h4>
                  <p className="text">Stop wasting time and money designing and managing a website that doesn???t get results. Happiness guaranteed!</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-pricing mt-40">
                  <div className="pricing-header text-center">
                    <h5 className="sub-title">Basic</h5>
                    <span className="price">$ 199</span>
                    <p className="year">per year</p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
                      <li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
                      <li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
                      <li><i className="lni-check-mark-circle"></i> Awesome Support</li>
                    </ul>
                  </div>
                  <div className="pricing-btn text-center">
                    <a className="main-btn" href="#">GET STARTED</a>
                  </div>
                  <div className="buttom-shape">
                    {/* <svg> svg 1</svg> */}
                    <img src="assets/images/1.svg" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-pricing pro mt-40">
                  <div className="pricing-baloon">
                    <img src="assets/images/baloon.svg" alt="baloon" />
                  </div>
                  <div className="pricing-header">
                    <h5 className="sub-title">Pro</h5>
                    <span className="price">$ 399</span>
                    <p className="year">per year</p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
                      <li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
                      <li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
                      <li><i className="lni-check-mark-circle"></i> Awesome Support</li>
                    </ul>
                  </div>
                  <div className="pricing-btn text-center">
                    <a className="main-btn" href="#">GET STARTED</a>
                  </div>
                  <div className="buttom-shape">
                    {/* <svg> svg 2</svg> */}
                    <img src="assets/images/2.svg" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-pricing enterprise mt-40">
                  <div className="pricing-flower">
                    <img src="assets/images/flower.svg" alt="flower" />
                  </div>
                  <div className="pricing-header text-right">
                    <h5 className="sub-title">Enterprise</h5>
                    <span className="price">$ 799</span>
                    <p className="year">per year</p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
                      <li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
                      <li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
                      <li><i className="lni-check-mark-circle"></i> Awesome Support</li>
                    </ul>
                  </div>
                  <div className="pricing-btn text-center">
                    <a className="main-btn" href="#">GET STARTED</a>
                  </div>
                  <div className="buttom-shape">
                    {/* <svg> svg 3</svg> */}
                    <img src="assets/images/3.svg" alt="shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="call-to-action" className="call-to-action">
          <div className="call-action-image">
            <img src="assets/images/call-to-action.png" alt="call-to-action" />
          </div>
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="call-action-content text-center">
                  <h2 className="call-title">Curious to Learn More? Stay Tuned</h2>
                  <p className="text">You let us know whenever you want us to update anything or think something can be optimised.</p>
                  <div className="call-newsletter">
                    <i className="lni-envelope"></i>
                    <input type="text" placeholder="john@email.com" />
                    <button type="submit">SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="testimonial" className="testimonial-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-10">
                  <h4 className="title">Testimonial</h4>
                  <p className="text">Stop wasting time and money designing and managing a website that doesn???t get results. Happiness guaranteed!</p>
                </div>
              </div>
            </div>
            

           
                         
            
             <div className="row">
              <div className="col-lg-12">
                <div className="row testimonial-active">

                {data  && data.map((singleData) => {

                 return  <div className="col-lg-4"> 
                  
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">

                      
                        <img src = 
                        {`uploads/${singleData.photo}`} 
                        alt="Author"
                         />
                     
                      </div>

                      
                      <div className="testimonial-content">


                        <p className="text">{singleData.testimonial_Description}</p>
                        <h6 className="author-name">{singleData.name}</h6>
                        <span className="sub-title">{singleData.post}</span>
                      
                      </div>
                       
                     
                    </div>
                    
                  </div>
                   })}
                </div>
              </div>
              
            </div> 
        

          </div>
        </section>


        <section className="client-logo-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="single-client mt-30 text-center">
                  <img src="assets/images/client_logo_01.png" alt="Logo" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-client mt-30 text-center">
                  <img src="assets/images/client_logo_02.png" alt="Logo" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-client mt-30 text-center">
                  <img src="assets/images/client_logo_03.png" alt="Logo" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-client mt-30 text-center">
                  <img src="assets/images/client_logo_04.png" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="contact" className="contact-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-10">
                  <h4 className="title">Get In touch</h4>
                  <p className="text">Stop wasting time and money designing and managing a website that doesn???t get results. Happiness guaranteed!</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form">
                  <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input type="text" name="name" placeholder="Your Name" data-error="Name is required." required="required" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input type="email" name="email" placeholder="Your Email" data-error="Valid email is required." required="required" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input type="text" name="subject" placeholder="Subject" data-error="Subject is required." required="required" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input type="text" name="phone" placeholder="Phone" data-error="Phone is required." required="required" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-form form-group">
                          <textarea placeholder="Your Mesaage" name="message" data-error="Please, leave us a message." required="required"></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <p className="form-message"></p>
                      <div className="col-md-12">
                        <div className="single-form form-group text-center">
                          <button type="submit" className="main-btn">send message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>


        <footer id="footer" className="footer-area">
          <div className="footer-widget">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                    <div className="footer-logo d-flex align-items-end">
                      <a className="mt-30" href="index.html"><img src="assets/images/logo.svg" alt="Logo" /></a>
                      <ul className="social mt-30">
                        <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                        <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                        <li><a href="#"><i className="lni-instagram-original"></i></a></li>
                        <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="footer-link">
                    <h6 className="footer-title">Company</h6>
                    <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Career</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="footer-link">
                    <h6 className="footer-title">Product & Services</h6>
                    <ul>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">Business</a></li>
                      <li><a href="#">Developer</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <div className="footer-link">
                    <h6 className="footer-title">Help & Suuport</h6>
                    <ul>
                      <li><a href="#">Support Center</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-7">
                  <div className="footer-newsletter">
                    <h6 className="footer-title">Subscribe Newsletter</h6>
                    <div className="newsletter">
                      <form action="#">
                        <input type="text" placeholder="Your Email" />
                        <button type="submit"><i className="lni-angle-double-right"></i></button>
                      </form>
                    </div>
                    <p className="text">Subscribe weekly newsletter to stay upto date. We don???t send spam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright text-center">
                    <p className="text">Template Crafted by <a rel="nofollow" href="../../index.htm">UIdeck</a> - UI Powered by <a el="nofollow" href="../../index-1.htm">AyroUI</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>


        <a className="back-to-top" href="#"><i className="lni-chevron-up"></i></a>


        <script src="assets/js/vendor/modernizr-3.6.0.min.js"></script>
        <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>

        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/popper.min.js"></script>

        <script src="assets/js/ajax-contact.js"></script>

        <script src="assets/js/jquery.easing.min.js"></script>
        <script src="assets/js/scrolling-nav.js"></script>

        <script src="assets/js/validator.min.js"></script>

        <script src="assets/js/jquery.magnific-popup.min.js"></script>

        <script src="assets/js/slick.min.js"></script>

        <script src="assets/js/main.js"></script>
      </body>
    </div>
  );
}


export default App;
