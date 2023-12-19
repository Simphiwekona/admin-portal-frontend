import './App.css';
import Login from './components/login/Login';
import { Navbar } from 'react-bootstrap';
import { ReaVayaLogo } from './assest/data.js';
import Signup from './components/signup/Sign.js';
import Users from './components/users/Users.js';
import QuoteModel from './components/quotation/QuoteModel.js';
import QuotaList from './components/quotation/QuoteList.js';

function App() {
  return (
    <div className="App">
      <QuoteModel/>

      <div className='container'>
        <QuotaList />
      </div>
    </div>
  );
}

export default App;
