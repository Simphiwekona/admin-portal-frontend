import { Button, Card } from "react-bootstrap";
import './Component.css'

const Checkout = ({ items }) => {

    const total = items.reduce((acc, item) => acc + item.itemPrice, 0);

    return (
        <>
            <Card className="checkout-card">
                <Card.Title className="mt-3">R {total.toFixed(2)}</Card.Title>
                <Card.Subtitle className="mt-3">Total Items: {items.length}</Card.Subtitle>
                <Button variant="success" className="mt-5" style={{ width: "18rem", margin:"auto" }}>
                    Checkout
                </Button>
            </Card>
        </>
    )
}
export default Checkout;