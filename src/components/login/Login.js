import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const Login = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useEffect('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState()

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleLogin = async () => {
        try{
            const response = await fetch(`http://localhost:8080/api/v1/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            if(response.ok){
                alert("Login Successful")
                handleClose();
            }else{
                console.error('Login failed')
            }
        }catch(error){
            console.error('Error during login: ', error)
        }
    }

    return (

        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" onClick={handleShow}>
                Login
            </button>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className='text-muted'>
                                Email will not be shared with anyone, PROMISE 😂
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                    
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Login;