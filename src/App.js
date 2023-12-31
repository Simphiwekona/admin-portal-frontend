import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Quotes from './pages/Quotes.jsx';
import Invoice from './pages/Invoice.jsx';
import Product from './pages/Product.jsx';
import AddItem from './pages/AddItems.jsx';
import Home from './pages/Home.jsx';


const App = () => {

 
  
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/quote" element={<Quotes />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/products" element={<Product />} />
            <Route path="/addItem/:quoteId" element={<AddItem />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
