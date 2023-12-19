import React, { useState } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

const QuoteModel = () => {

    const [show, setShow] = useState(false);
    const [valid, setValid] = useState(false);
    const [quoteData, setQuoteData] = useState({
        customer_name: '',
        contact_number: '',
        email: '',
        description: ''
    })

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const quote = e.currentTarget;

        if(quote.checkValidity() === false){
            e.stopPropagation();
        }else {
            fetch("http://localhost:8080/api/quotations/create", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(quoteData),
            })
            .then((response) => response.json())
            .then((data) => {
                alert('Successful Created Quote');
                console.log('success', data);
                handleClose();
                setValid(true)
            })
            .catch((error) => {
                console.log('Error', error);
                alert("Can't connect, Please try again!")
            });
        }
        setValid(true);
    };

    const handleChange = (e) => {
        setQuoteData({
            ...quoteData,
            [e.target.id]: e.target.value
        });
    }

    return (
        <>
        <Button variant='primary' onClick={handleShow}>
            New Quote
        </Button>
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Quotation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={valid} onSubmit={handleSubmit} className='was-validated'>
                    <Form.Group className='mb-3' controlId='customer_name'>
                        <Form.Label>Customer Name:</Form.Label>
                        <Form.Control type='text' placeholder='Enter Customer Name' onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='contact_number'>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type='text' placeholder='Enter Client Number' onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter Email' onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder='Enter Description' onChange={handleChange}  required/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='unit'>
                        <Form.Label>Unit</Form.Label>
                        <Form.Control type='email' placeholder='Enter Unit Price' onChange={handleChange} required/>
                    </Form.Group>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>R</InputGroup.Text>
                        <Form.Control onChange={handleChange} />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={handleClose}>Close</Button>
                <Button variant='success' onClick={handleSubmit}>Add Quote</Button>
            </Modal.Footer>
        </Modal>
        </>
    )

}
export default QuoteModel;