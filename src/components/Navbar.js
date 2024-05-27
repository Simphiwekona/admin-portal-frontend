import {Link} from 'react-router-dom';
import './Component.css';
import React, {useState} from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avator from './../assest/User-avatar.svg.png';


function Navbar() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleToggle = () => {
        const openDropdown = !dropdownOpen;
        console.log(openDropdown)
        setDropdownOpen(openDropdown);
    }

    return (
        <>
            <nav className="navbar" id="navbar">
                <div className="logo">Logo</div>
                <div className="nav-links" id="nav-links">
                    <a href="/dashboard">Home</a>
                    <a href="/quote">Quotation</a>
                    <a href="/products">Products</a>
                    <a href="/users">Users</a>
                </div>
                <div className="nav-buttons">
                    <button className="signup-btn" id="signup-button">Signup</button>
                    <button className="login-btn" id="login-button">Login</button>
                </div>
                <div className="notification-section">
                    <a href="#" alt="notifications" className="notification">
                        <NotificationsIcon/>
                    </a>
                    <img src={Avator} alt="avatar" className="avatar"/>

                    <button type="button" className="dropdown-btn" onClick={handleToggle}>
                        {dropdownOpen ? '▲' : '▼'}
                    </button>

                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <a href="#" className="">Profile</a>
                            <a href="#" className="">Logout</a>
                        </div>
                    )}

                </div>
            </nav>
        </>

    )
}

export default Navbar;