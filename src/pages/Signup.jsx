import React, { useState } from 'react';
import './styles/style.css';
import './styles/signup.css';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        defaultRole: 'USER',
    });
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();
    const [redirecting, setRedirecting] = useState(false);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if (userData.first_name.trim() === '') {
            errors.first_name = 'First name is required';
        }
        if (userData.last_name.trim() === '') {
            errors.last_name = 'Last name is required';
        }
        if (userData.email.trim() === '') {
            errors.email = 'Email is required';
        } else if (!validateEmail(userData.email)) {
            errors.email = 'Please enter a valid email';
        }

        if (Object.keys(errors).length === 0) {
            fetch("http://localhost:8080/api/v1/create", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
                .then((response) => {
                    if (!response.ok){
                        throw new Error('Network response is not ok')
                    }
                    return response.json()}
                )
                .then((data) => {
                    console.debug(data);
                    setNotification({ message: "Successfully registered!", severity: "success" });
                    setRedirecting(true);
                })
                .catch((error) => {
                    setNotification({ message: "Please try again!", severity: "error" });
                    console.error(error);
                });
        } else {
            setErrors(errors);
        }
    };

    if (redirecting){
        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.id]: null
        });
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <form onSubmit={handleSubmit} className="login100-form">
                    <span className="login100-form-title">
                        Sign Up
                    </span>

                    <div className="wrap-input100">
                        <input className="input100" type="text" id="first_name" placeholder="First Name" onChange={handleChange} />
                        {errors.first_name && <span className="error">{errors.first_name}</span>}
                    </div>

                    <div className="wrap-input100">
                        <input className="input100" type="text" id="last_name" placeholder="Last Name" onChange={handleChange}/>
                        {errors.last_name && <span className="error">{errors.last_name}</span>}
                    </div>

                    <div className="wrap-input100">
                        <input className="input100" type="email" id="email" placeholder="Email" onChange={handleChange}/>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn" type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            {notification &&
                <Alert severity="success"
                       sx={{
                           position: 'absolute',
                           top: 0,
                           right: 0
                       }}>
                    Successfully Registered!
                </Alert>

            }
        </div>
    );
};

export default SignUp;
