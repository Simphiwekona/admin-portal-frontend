import React, {useState, useEffect} from 'react';
import Navbar from "../Navbar";
import { ripples } from 'ldrs'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./../Component.css"
import {Button} from "react-bootstrap";

const DeleteConfirmationModel = ({ onDelete, onCancel }) => {
    return (
        <div className="delete-confirmation">
            <div className="delete-confirmation__content">
                <p>Are you sure you want to delete this user?</p>
                <Button onClick={onDelete} variant="primary" style={{ width: '100px', marginRight: '10px' }}> Delete</Button>
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

    const handleDeleteClick = () => {
        setShowModel(true);
    }
    const handleDeleteConfirmed = () => {
        // Perform delete action
        setShowModel(false); // Close modal after deletion
    };

    const handleCancelClick = () => {
        setShowModel(false);
    };


    ripples.register();

    const handleOpen = (id) => {
        setOpen(open === id ? null : id);
    };


    const fetchData = () => {
        return fetch("http://localhost:8085/api/v1/all")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network is down, Try again later');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                throw error;
            });
    };

    const deleteUser = (userId) => {
        fetch(`http://localhost:8085/api/v1/${userId}`, { // Use backticks (`) here
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete user');
                }
                fetchData();
            })
            .catch(error => {
                console.error('Error deleting user: ', error);
            });
    };


    useEffect(() => {
        const fetchDataAndHandleError = () => {
            fetchData()
                .then(data => setUsers(data))
                .catch(error => console.error('Error setting employ data:', error))
                .finally(() => setLoading(false))
        };
        fetchDataAndHandleError();

        const intervalId = setInterval(fetchDataAndHandleError, 1000);
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
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((users) => (
                            <tr key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.firstName}</td>
                                <td>{users.lastName}</td>
                                <td>{users.email}</td>
                                <td>
                                    <div className="dropdown-container">
                                    <button onClick={() => handleOpen(users.id)} className="dropdown-btn1"><MoreVertIcon /></button>
                                    {open === users.id && (
                                        <ul className="menu">
                                            <li className="menu-item">
                                                <button>Edit</button>
                                            </li>
                                            <li className="menu-item">
                                                <button>View</button>
                                            </li>
                                            <li className="menu-item">
                                                <button onClick={handleDeleteClick}> Delete </button>
                                            </li>
                                        </ul>
                                    )}
                                    </div>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>

                )
                }
                {showModel && (
                    <DeleteConfirmationModel onDelete={handleDeleteConfirmed}
                                             onCancel={handleCancelClick} />
                )}
            </div>
        </>
    )

}

export default Users;