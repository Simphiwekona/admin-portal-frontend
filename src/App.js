import './App.css';
import { Button, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quotes from './pages/Quotes.jsx';
import Invoice from './pages/Invoice.jsx';
import Product from './pages/Product.jsx';
import AddItem from './pages/AddItems.jsx'
import { useState } from 'react';

const App = () => {

  const [sideVisible, setSideVisible] = useState(true);

  const toggleSideNav = () => {
    setSideVisible(!sideVisible);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <button onClick={toggleSideNav}>Toggle Nav</button>
          <div className={`side-nav ${sideVisible ? 'visible' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/quote">Quote</Link>
            <Link to="/invoice">Invoice</Link>
            <Link to="/products">Products</Link>
          </div>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/quote" element={<Quotes />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/products" element={<Product />} />
            <Route path="/addItem" element={<AddItem />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
