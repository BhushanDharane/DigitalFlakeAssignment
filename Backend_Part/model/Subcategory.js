const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema({
  subcategoryName: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true, 
  },
  image: {
    type: String, 
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  },
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);
