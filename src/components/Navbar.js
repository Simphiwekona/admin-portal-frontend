import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import './Component.css';

function Navbar(){
    return(
        <div className='navigation'>
            <Link to='/message' className='nav'><FontAwesomeIcon icon={faMessage} /></Link>
            <Link to="/quote" className='nav'>Quotations</Link>
            <Link to="/invoice" className='nav'>Invoices</Link>
            <Link to="/products" className='nav'>Products</Link>
        </div>
    )
}
export default Navbar;