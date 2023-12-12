import './App.css';
import Login from './components/login/Login';
import { Navbar } from 'react-bootstrap';
import { ReaVayaLogo } from './assest/data.js';
import Signup from './components/signup/Sign.js';
import Users from './components/users/Users.js';

function App() {
  return (
    <div className="App">
      <Signup/>

      <div className='container'>
        <Users />
      </div>
    </div>
  );
}

export default App;
