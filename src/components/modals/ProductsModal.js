import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ProductsModal = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                New Product
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Title style={{ textAlign: "center" }}>New Product</Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" placeholder="Model" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Laptop</option>
                                <option value="2">Monitor</option>
                                <option value="3">Desktop</option>
                                <option value="4">other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Sold</option>
                                <option value="2">Pending</option>
                                <option value="3">Available</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default ProductsModal;