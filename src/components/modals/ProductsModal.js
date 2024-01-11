import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ProductsModal = () => {
    const [show, setShow] = useState(false);
    const [productData, setProductData] = useState({
        product: '',
        model: '',
        category: '',
        status: ''
    });

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/products/adding", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('success adding product');
            handleClose();
        })
        .catch((error) => {
            console.error('Error', error);
            alert("Can't connect, Please try again!")
        });
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                New Product
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Title style={{ textAlign: "center" }}>New Product</Modal.Title>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" id="product" placeholder="Product Name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" id="model" placeholder="Model" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select id="category" aria-label="Default select example" onChange={handleChange}>
                                <option>Open this select menu</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Monitor">Monitor</option>
                                <option value="Desktop">Desktop</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select id="status" aria-label="Default select example" onChange={handleChange}>
                                <option>Open this select menu</option>
                                <option value="Sold">Sold</option>
                                <option value="Pending">Pending</option>
                                <option value="Available">Available</option>
                            </Form.Select>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="success" type="submit">
                                Add Product
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProductsModal;
