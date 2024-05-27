import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

const QuotationForm = () => {
    const [clientType, setClientType] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [userData, setUserData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        quatity: '',
        description: '',
        unitPrice: ''
    });
    const [discount, setDiscount] = useState(0);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleDiscountChange = (e) => {
        setDiscount(e.target.value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            ...formData,
            totalPrice: (formData.quatity * formData.unitPrice).toFixed(2),
        };
        setItems((prevItems) => [...prevItems, newItem]);
        setFormData({ quatity: '', description: '', unitPrice: '' });
        handleClose();
    }

    const calculateTotalSum = () => {
        return items.reduce((sum, item) => sum + parseFloat(item.totalPrice), 0).toFixed(2);
    }

    const calculateDiscountTotal = () => {
        const totalSum = calculateTotalSum();
        return (totalSum - (totalSum * (discount / 100))).toFixed(2);
    }

    const handleClientTypeChange = (e) => {
        setClientType(e.target.value);
        setSelectedUser('');
        setUserData(null);
    }

    const handleUserChange = (e) => {
        const userId = e.target.value;
        setSelectedUser(userId);
        if (userId) {
            // Mock user data
            const mockUserData = {
                user1: { name: 'John Doe', email: 'john@example.com' },
                user2: { name: 'Jane Smith', email: 'jane@example.com' },
            };
            setUserData(mockUserData[userId]);
        } else {
            setUserData(null);
        }
    }

    return (
        <div className="container">
            <button className="primary-btn">Save Quote</button>
            <div className="user-section">
                <div className="title">
                    <h2>User Information</h2>
                </div>
                <form>
                    <Form.Select aria-label="Default select example" onChange={handleClientTypeChange}>
                        <option value="">Select Client Type</option>
                        <option value="existing">Existing Client</option>
                        <option value="new">New Client</option>
                    </Form.Select>

                    {clientType === 'existing' && (
                        <div id="existing">
                            <Form.Select aria-label="User List" onChange={handleUserChange}>
                                <option value="">Select User</option>
                                <option value="user1">User 1</option>
                                <option value="user2">User 2</option>
                            </Form.Select>

                            {selectedUser && userData && (
                                <div>
                                    <Form.Group controlId="userName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" value={userData.name} readOnly />
                                    </Form.Group>
                                    <Form.Group controlId="userEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" value={userData.email} readOnly />
                                    </Form.Group>
                                </div>
                            )}
                        </div>
                    )}

                    {clientType === 'new' && (
                        <div id="new">
                            <div className="row">
                            <Form.Group controlId="newUserName">
                                <Form.Label>Customer Name</Form.Label>
                                <Form.Control type="text" placeholder="Client's name" />
                            </Form.Group>
                            <Form.Group controlId="newUserEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            </div>
                            <div className="row">
                                <Form.Group controlId="newUserPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group controlId="newUserLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="Location" />
                                </Form.Group>
                            </div>
                        </div>
                    )}
                </form>
            </div>

            <div className="description-section">
                <div className="title">
                    <h2>Quote Description</h2>
                </div>
                <button className="primary-btn" onClick={handleShow}>Add Item</button>

                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Quatity</th>
                        <th>Description</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.quatity}</td>
                            <td>{item.description}</td>
                            <td>R {item.unitPrice}</td>
                            <td>R {item.totalPrice}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formQuatity">
                                <Form.Label>Quatity</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="quatity"
                                    value={formData.quatity}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formUnitPrice">
                                <Form.Label>Unit Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="unitPrice"
                                    value={formData.unitPrice}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
            <div className="summary-section">
                <Form.Group controlId="formDiscount">
                    <Form.Label>Discount (%)</Form.Label>
                    <Form.Control
                        type="number"
                        value={discount}
                        onChange={handleDiscountChange} />
                </Form.Group>
                <p>Total Sum: R{calculateTotalSum()}</p>
                <p>Discounted Total: R{calculateDiscountTotal()}</p>
            </div>
        </div>
    )
}

export default QuotationForm;
