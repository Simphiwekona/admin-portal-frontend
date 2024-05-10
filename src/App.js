import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Quotes from './pages/Quotes.jsx';
import Invoice from './pages/Invoice.jsx';
import Product from './pages/Product.jsx';
import AddItem from './pages/AddItems.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Analytics from './pages/Analytics.jsx';
import SignUp from './pages/Signup.jsx';
import Message from './pages/Message.jsx';
import Dashboard from "./pages/dashboard";
import Users from "./components/users/Users";
import EditUser from "./components/users/EditUser";


const App = () => {

 
  // Checkout items={items}
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/quote" element={<Quotes />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/products" element={<Product />} />
            <Route path="/addItem/:quoteId" element={<AddItem quoteId={1}/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/message' element={<Message />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
            <Route path='/editUser' element={<EditUser />} />

            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
