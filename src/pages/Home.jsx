import './styles/style.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFaceb } from '@fortawesome/free-solid-svg-icons';
import AboutImage from './../assest/aboutLogo.png'



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
                        <img src={AboutImage} alt=""/>
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
                <h1>Products</h1>
            </div>
        </section>
    )
}
const Footer = () => {
    return (
        <section className="footer" id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pr-md-5">
                        <Link to="" className="footer-logo d-block mb-4">Linked Digital Computers</Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perferendis ratione perspiciatis accusantium.</p>
                    </div>
                    <div className="col-md">
                        <ul className="list-unstyled nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Product</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul className="list-unstyled nav-links">
                            <li><Link to="/">Privacy</Link></li>
                            <li><Link to="/">Terms &amp; Conditions</Link></li>
                            <li><Link to="/">Partners</Link></li>
                        </ul>
                    </div>
                    <div className="col-md text-md-center">
                        <ul className="social list-unstyled">
                            <li><Link to=""><FontAwesomeIcon icon="fa-brands fa-facebook" /></Link></li>
                            <li><Link to=""><FontAwesomeIcon icon={faCoffee} style={{ color: "#fff" }} /></Link></li>
                            <li><Link to=""><FontAwesomeIcon icon={faCoffee} style={{ color: "#fff" }} /></Link></li>
                            <li><Link to=""><FontAwesomeIcon icon={faCoffee} style={{ color: "#fff" }} /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
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