import { useState } from "react"
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import './../Component.css';


const AddItemModal = ({onAdd}) => {

    const [show, setShow] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = () => {
        const newItem = {
            itemName,
            itemDescription,
            itemPrice: parseFloat(itemPrice) || 0,
        }

        onAdd(newItem);
        handleClose();
    }


    return (
        <>
            <Button variant="success" onClick={handleShow}>Add</Button>

            <Modal show={show} onHide={handleClose} centered className="add-item-modal">
                <Modal.Title>Add Item</Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control
                             type="text"
                            placeholder="Item Name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows={3}
                            value={itemDescription}
                            onChange={(e) => setItemDescription(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select aria-Label="catergory">
                                <option>catergory</option>
                                <option value="1">Laptop Sale</option>
                                <option value="2">Repair</option>
                                <option value="3">Monitor</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>R</InputGroup.Text>
                            <Form.Control 
                            aria-label="Amount (to the nearest rand)"
                            value={itemPrice}
                            onChange={(e) => setItemPrice(e.target.value)} 
                            />
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleSubmit}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default AddItemModal;