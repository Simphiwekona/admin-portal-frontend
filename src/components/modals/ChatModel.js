import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./../Component.css";

const ChatModel = () => {
  const [show, setShow] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    number: "",
    question: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data:" , contactData)
    fetch("http://localhost:8080/api/contact/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Successfully sent the email", data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error", error);
        alert("Email Not sent. Try again.");
      });
  };

  return (
    <>
      <a className="active-button" onClick={handleShow}>
        Contact us
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Enter your Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                placeholder="Enter your Email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number</Form.Label>
              <Form.Control
                id="number"
                type="text"
                placeholder="Enter your Number"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control id="question" as="textarea" rows={5} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChatModel;
