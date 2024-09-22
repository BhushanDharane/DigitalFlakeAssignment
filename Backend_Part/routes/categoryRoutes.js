// routes/categoryRoutes.js
const express = require('express');
const { getCategories, addCategory, deleteCategory, updateCategory } = require('../controllers/categoryController');
const router = express.Router();

// GET all categories
router.get('/category', getCategories);

// POST add new category
router.post('/category', addCategory);

// DELETE a category
router.delete('/category/:id', deleteCategory);

// PUT update category
router.put('/category/:id', updateCategory);

module.exports = router;
