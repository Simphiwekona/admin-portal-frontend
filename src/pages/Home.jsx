import { Link, animateScroll as scroll } from "react-scroll";
import AboutImage from "./../assest/aboutLogo.png";
import "./styles/style.css";
import "./styles/footer.css";
import "./styles/products.css";

import Latitude from "./../assest/latitude.png";
import Gaming from "./../assest/gamingpc.png";
import Macbook from "./../assest/macbook.png";
import ChatModel from "../components/modals/ChatModel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faDribbble,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navigation">
      <Link to="about-us" smooth={true} duration={300} className="nav">
        About Us
      </Link>

      <Link to="products" smooth={true} duration={300} className="nav">
        Products
      </Link>
    </div>
  );
};
const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="header-text">
            <h1>Welcome</h1>
            <span>Get your IT problems resolved</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              exercitationem similique omnis praesentium adipisci nemo
              necessitatibus. Accusamus tenetur, cum temporibus architecto
              impedit aliquam ipsam commodi asperiores deserunt est eveniet.
              Reprehenderit?
            </p>
          </div>
          <div className="col-md-4">
            <img src={AboutImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <section className="products mb-5" id="products">
      <div className="container">
        {/* <div className="well well-sm">
                    <strong>Display</strong>
                    <div className="btn-group">
                        <a href="#" id="list" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-th-list">
                        </span>List</a> <a href="#" id="grid" className="btn btn-default btn-sm"><span
                            className="glyphicon glyphicon-th"></span>Grid</a>
                    </div>
                </div> */}
        <div className="row">
          <div className="item  col-md-4">
            <div className="thumbnail">
              <img className="group list-group-image" src={Latitude} alt="" />
              <div className="caption">
                <h4 className="group inner list-group-item-heading">
                  Product title
                </h4>
                <p className="group inner list-group-item-text">
                  Product description... Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <a className=" btn-5">Request Quotation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item  col-md-4">
            <div className="thumbnail">
              <img className="group list-group-image" src={Gaming} alt="" />
              <div className="caption">
                <h4 className="group inner list-group-item-heading">
                  Product title
                </h4>
                <p className="group inner list-group-item-text">
                  Product description... Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <a className="custom-btn btn-5">Request Quotation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item  col-md-4">
            <div className="thumbnail">
              <img className="group list-group-image" src={Macbook} alt="" />
              <div className="caption">
                <h4 className="group inner list-group-item-heading">
                  Apple Product
                </h4>
                <p className="group inner list-group-item-text">
                  Product description... Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
                <div className="row ">
                  <div className="col-xs-12 col-md-6">
                    <a className="custom-btn btn-5">Request Quotation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

const ReviewSection = () => {
 return (
     <div className="review-container">
       <div className="card">
         <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate velit non nulla
           consectetur, in ultricies elit bibendum. Proin varius gravida felis ut laoreet.</p>
         <p className="author">John Doe</p>
         <p className="date">April 1, 2024</p>
       </div>

       <div className="card">
         <p className="review">Nullam tempor sem nec nunc dignissim scelerisque. Phasellus eget massa nec sapien
           ullamcorper tincidunt. Etiam sit amet cursus neque. Sed rhoncus eget ipsum id dapibus.</p>
         <p className="author">Jane Smith</p>
         <p className="date">April 2, 2024</p>
       </div>

       <div className="card">
         <p className="review">Fusce vehicula dui nec diam cursus, non bibendum nisi ultricies. Sed a arcu nec mauris
           dictum venenatis. Ut ut vehicula metus.</p>
         <p className="author">Michael Johnson</p>
         <p className="date">April 3, 2024</p>
       </div>
     </div>
 )
}
const Footer = () => {
  return (
      <section id="footer">
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                  to help the upcoming programmers with the code. Scanfcode
                  focuses on providing the most efficient code or snippets as the
                  code wants to be simple. We will help programmers build up
                  concepts in different programming languages that include C, C++,
                  Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                  Algorithm.
                </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Address</h6>
              <ul className="footer-links">
                <li>42 Thenus Street, Kempton Park</li>
                <li>Johannesburg, 1618</li>
                <li>South Africa</li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <ChatModel />
                </li>
                <li>
                  <a href="/login">Training</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Terms and Service</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <Link to="/"> LINKED DIGITAL COMPUTERS</Link>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  {/* <a className="facebook" href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a> */}
                </li>
                <li>
                  {/* <a className="twitter" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a> */}
                </li>
                <li>
                  {/* <a className="dribbble" href="#">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a> */}
                </li>
                <li>
                  {/* <a className="linkedin" href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Products />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
