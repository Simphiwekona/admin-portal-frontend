import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import Navbar from "../Navbar";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/v1/all")
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
        fetch(`http://localhost:8080/api/v1/${userId}`, { // Use backticks (`) here
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
                    <p>Loading...</p>
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
                                <td>{users.first_name}</td>
                                <td>{users.last_name}</td>
                                <td>{users.email}</td>
                                <td>
                                    <Button variant='danger' onClick={() => deleteUser(users.id)}>
                                        Delete
                                    </Button>
                                </td>
                                <td>
                                    <Button variant='success'>
                                        Generate
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )
                }
            </div>
        </>
    )

}

export default Users;