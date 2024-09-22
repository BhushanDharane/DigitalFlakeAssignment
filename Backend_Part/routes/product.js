const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// CREATE a new product
router.post('/product/', async (req, res) => {
  const { productName, category, image, status } = req.body;

  const newProduct = new Product({
    productName,
    category,
    image,
    status: status || 'Active',
  });

  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ all products
router.get('/product/', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a product
router.put('/product/:id', async (req, res) => {
  const { productName, category, image, status } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { productName, category, image, status },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a product
router.delete('/product/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
