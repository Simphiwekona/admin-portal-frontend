import './styles/style.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



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
                <h1>About Us</h1>
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
    return(
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
                            <li><Link to=""><FontAwesomeIcon icon={faCoffee} style={{color:"#fff"}}/></Link></li>
                            <li><Link to=""><FontAwesomeIcon icon={faCoffee} style={{color:"#fff"}}/></Link></li>
                            <li><Link to=""><FontAwesomeIcon icon={faCoffee} style={{color:"#fff"}}/></Link></li>
                            <li><Link to=""><FontAwesomeIcon icon={faCoffee} style={{color:"#fff"}}/></Link></li>
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