import './App.css';
import Login from './components/login/Login';
import { Navbar } from 'react-bootstrap';
import { ReaVayaLogo } from './assest/data.js';
import Signup from './components/signup/Sign.js';
import Users from './components/users/Users.js';
import QuoteModel from './components/quotation/QuoteModel.js';
import QuotaList from './components/quotation/QuoteList.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quotes from './pages/Quotes.jsx';
import Invoice from './pages/Invoice.jsx';
import Product from './pages/Product.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="side-nav">
            <a href="/">Home</a>
            <a href="/quote">Quote</a>
            <a href="/invoice">Invoice</a>
            <a href="/products">Products</a>
          </div>
          <Routes>
            <Route path="/" exact component={<App />} />
            <Route path="/quote" element={<Quotes />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/products" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
