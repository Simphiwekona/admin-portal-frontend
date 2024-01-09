import './styles/style.css';
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="about-us" smooth={true} duration={500}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="products" smooth={true} duration={500}>Products</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
    )
}
const Header = () => {
    return(
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
    return(
        <section className="about-us" id='about-us'>
            <div className="container">
                <h1>About Us</h1>
            </div>
        </section>
    )
}

const Products = () => {
    return(
        <section className="products" id='products'>
            <div className="container">
                <h1>Products</h1>
            </div>
        </section>
    )
}

const Home = () => {
    return(
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Products />
        </div>
    )
}






export default Home;