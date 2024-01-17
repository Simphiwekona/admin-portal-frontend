import { Link, animateScroll as scroll } from 'react-scroll';
import AboutImage from './../assest/aboutLogo.png'
import './styles/style.css';
import './styles/footer.css';
import './styles/products.css'



const Navbar = () => {
    return (
        <div className="navigation">
            <Link to="about-us"
                smooth={true}
                duration={300}
                className="nav">About Us</Link>

            <Link to="products"
                smooth={true}
                duration={300}
                className="nav">Products</Link>
        </div>
    )
}
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
    )
}

const AboutUs = () => {
    return (
        <section className="about-us" id='about-us'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Cumque exercitationem similique omnis praesentium adipisci nemo necessitatibus.
                            Accusamus tenetur, cum temporibus architecto impedit aliquam ipsam commodi asperiores
                            deserunt est eveniet. Reprehenderit?</p>
                    </div>
                    <div className="col-md-4">
                        <img src={AboutImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Products = () => {
    return (
        <section className="products" id='products'>
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
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Request Quotation</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-md-4">
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
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Request Quotation</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-md-4">
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
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Request Quotation</a>
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
    )
}
const Footer = () => {
    return (
        <section id='footer'>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
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
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="/login">Training</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Terms and Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <Link to="/">  LINKED DIGITAL COMPUTERS</Link>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Products />
            <Footer />
        </div>
    )
}






export default Home;