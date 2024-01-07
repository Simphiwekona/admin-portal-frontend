import React, { useState } from 'react';
import AddItemModal from '../components/modals/AddItemModal';
import Item from '../components/Items';
import Checkout from '../components/Checkout';
import './../components/Component.css'

const AddItem = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    }


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