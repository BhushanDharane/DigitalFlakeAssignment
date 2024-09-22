const express = require('express');
const router = express.Router();
const Subcategory = require('../models/Subcategory');

// CREATE a new subcategory
router.post('/subcategory/', async (req, res) => {
  const { subcategoryName, category, image, status } = req.body;

  const newSubcategory = new Subcategory({
    subcategoryName,
    category,
    image,
    status: status || 'Active',
  });

  try {
    const savedSubcategory = await newSubcategory.save();
    res.json(savedSubcategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ all subcategories
router.get('/subcategory/', async (req, res) => {
  try {
    const subcategories = await Subcategory.find().populate('category');
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a subcategory
router.put('/subcategory/:id', async (req, res) => {
  const { subcategoryName, category, image, status } = req.body;

  try {
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(
      req.params.id,
      { subcategoryName, category, image, status },
      { new: true }
    );
    res.json(updatedSubcategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a subcategory
router.delete('/subcategory/:id', async (req, res) => {
  try {
    await Subcategory.findByIdAndDelete(req.params.id);
    res.json({ message: 'Subcategory deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
