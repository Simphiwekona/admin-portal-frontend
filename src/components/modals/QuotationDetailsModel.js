import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const QuotationDetailsModel = ({ quoteId }) => {
  const [show, setShow] = useState(false);
  const [quotation, setQuotation] = useState(null);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setShow(false);
    setError(null); // Clear error on modal close
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/${quoteId}`);
        if (response.ok) {
          const data = await response.json();
          setQuotation(data);
          console.log("quotation: ", data);
        } else {
          setError(`Error fetching quotation: ${response.status}`);
          setQuotation(null);
        }
      } catch (error) {
        console.error("Error fetching quotation: ", error);
        setError("Error fetching quotation. Please try again later.");
        setQuotation(null);
      }
    };

    fetchQuotation();
  }, [quoteId]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Quote Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <>
              {quotation ? (
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Customer Name: </Form.Label>
                    <Form.Control
                      type="text"
                      value={quotation.customer_name}
                      readOnly
                    />
                  </Form.Group>
                  {/* Add other form fields as needed */}
                </Form>
              ) : (
                <p>Quotation not found</p>
              )}
            </>
          )}
          <Form>
            <Form.Select aria-label="Default select example">
              <option>Status</option>
              <option value="approved">Approve</option>
              <option value="decline">Decline</option>
              <option value="paid">Paid</option>
            </Form.Select>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuotationDetailsModel;
