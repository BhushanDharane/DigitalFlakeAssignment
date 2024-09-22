
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const categoryRoutes = require('./routes/categoryRoutes');
const Subcategory = require('./routes/Subcategory');
const  product = require('./routes/product');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// Routes
app.use('/categories/categories', categoryRoutes);
app.use('/subcategory/subcategories', Subcategory)  ;
app.use('/product/products' , product);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/DigitalFlake', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
