import React, { useState } from 'react';
import AddItemModal from '../components/modals/AddItemModal';
import Item from '../components/Items';
import Checkout from '../components/Checkout';
import './../components/Component.css'
import { useLocation, useParams } from 'react-router-dom';

const AddItem = ({quoteId}) => {
    const [items, setItems] = useState([]);
    

    const addItem = async (item) => {
        const response = await fetch(`http://localhost:8080/api/items/addItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...item, quoteId }),
        });

        if (response.ok) {
            const newItem = await response.json();
            setItems([...items, newItem]);
        }
    };

    const removeItem = async (itemId) => {
        await fetch(`http://localhost:8080/api/items/${itemId}`, {
            method: 'DELETE',
        });

        setItems(items.filter((item) => item.itemId !== itemId));
    };

    return (
        <div className='container'>
            <h1 className="item-header">Add Item</h1>
            <div className='mb-3'>
                <AddItemModal onAdd={addItem} />
            </div>
            {items.map((item, index) => (
                <Item key={index} item={item} onDelete={() => removeItem(index)} />
            ))}

            <Checkout items={items}  />
        </div>
    );
};
export default AddItem;