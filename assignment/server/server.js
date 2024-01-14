const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('your mongodb connection String', { useNewUrlParser: true, useUnifiedTopology: true });
console.log("database Connected")

const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  description: String,
});

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });
  await product.save();
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
