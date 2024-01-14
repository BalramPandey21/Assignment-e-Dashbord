// AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = () => {
    axios.post('http://localhost:5000/api/products', { name, price, description })
      .then(response => {
        console.log('Product added successfully:', response.data);
        setName('');
        setPrice('');
        setDescription('');
      })
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <label>Name: <input type="text" value={name} onChange={e => setName(e.target.value)} /></label>
      <label>Price: <input type="number" value={price} onChange={e => setPrice(e.target.value)} /></label>
      <label>Description: <input type="text" value={description} onChange={e => setDescription(e.target.value)} /></label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;
