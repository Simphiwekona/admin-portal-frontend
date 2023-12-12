import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Signup = () => {
    const [show, setShow] = useState(false);
    const [valid, setValid] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)



    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        const form = e.currentTarget;
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            fetch(`http://localhost:8080/api/v1/create`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert('Successful SignUp');
                    console.log('success', data);
                    handleClose();
                    setValid(true); // Move setValid inside the successful fetch block
                })
                .catch((error) => {
                    console.log('Error', error);
                    alert("Can't connect, Please try again!");
                });
        }

        setValid(true); // Move this line outside the else block
    };
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Signup
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={valid} onSubmit={handleSubmit} className='was-validated' >
                        <Form.Group className='mb-3' controlId='first_name'>
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type='text' placeholder='Enter First Name' onChange={handleChange} required />
                            <Form.Control.Feedback>Look good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='last_name'>
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type='text' placeholder='Enter Last Name' onChange={handleChange} required />
                            <Form.Control.Feedback>Look good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Enter Email' onChange={handleChange} required />
                            <Form.Text className='text-muted'>
                                Please make sure you enter the correct Email.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant='danger' onClick={handleClose}>Close</Button>
                        <Button variant='primary' onClick={handleSubmit}>Signup</Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>

        </>
    )
}
export default Signup;