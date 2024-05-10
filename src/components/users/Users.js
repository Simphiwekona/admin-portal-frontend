import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import { ripples } from 'ldrs';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./../Component.css";
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const DeleteConfirmationModel = ({ onDelete, onCancel, userId }) => {
    return (
        <div className="delete-confirmation">
            <div className="delete-confirmation__content">
                <p>Are you sure you want to delete this user?</p>
                <Button onClick={() => onDelete(userId)} variant="primary" style={{ width: '100px', marginRight: '10px' }}> Delete</Button>
                <Button onClick={onCancel} variant="danger" style={{ width: '100px' }}>Cancel</Button>
            </div>
        </div>
    )
}

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(null);
    const [showModel, setShowModel] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleDeleteClick = (userId) => {
        setShowModel(true);
        setOpen(userId);
    }

    const handleDeleteConfirmed = (userId) => {
        fetch(`http://localhost:8085/api/v1/user/${userId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete user')
                }
                fetchData();
            })
            .catch(error => {
                console.error('Error deleting user: ', error)
            })
            .finally(() => {
                setShowModel(false);
                setOpen(null);
            });
    };

    const handleCancelClick = () => {
        setShowModel(false);
        setOpen(null);
    };

    ripples.register();

    const handleOpen = (userId) => {
        setOpen(open === userId ? null : userId);
    };

    const handleOpenEditUser = (userId) => {
        navigate('/editUser');
    };

    const fetchData = () => {
        return fetch("http://localhost:8085/api/v1/all")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network is down, Try again later');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => {
                console.error('Error fetching data: ', error);
                throw error;
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(fetchData, 600000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Navbar />
            <div className='container mt-lg-5'>
                {loading ? (
                    <l-ripples
                        size="45"
                        speed="2"
                        color="black"
                    ></l-ripples>
                ) : (
                    <table className='table'>
                        <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td>
                                    <div className="dropdown-container">
                                        <button onClick={() => handleOpen(user.id)} className="dropdown-btn1">
                                            <MoreVertIcon /></button>
                                        {open === user.id && (
                                            <ul className="menu">
                                                {!user.status.includes('DELETED') && (
                                                    <>
                                                        <li className="menu-item">
                                                            <button onClick={handleOpenEditUser}>Edit</button>
                                                        </li>
                                                        <li className="menu-item">
                                                            <button>View</button>
                                                        </li>
                                                    </>
                                                )}
                                                <li className="menu-item">
                                                    <button onClick={() => handleDeleteClick(user.id)}>
                                                        {user.status.includes('DELETED') ? 'Activate' : 'Delete'}
                                                    </button>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
                {showModel && (
                    <DeleteConfirmationModel
                        onDelete={handleDeleteConfirmed}
                        onCancel={handleCancelClick}
                        userId={open}
                    />
                )}
            </div>
        </>
    )
}

export default Users;
