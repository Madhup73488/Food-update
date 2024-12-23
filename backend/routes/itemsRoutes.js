const express = require('express');
const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require('../controllers/itemsController');

const router = express.Router();

// Define the routes
router.post('/api/items', createItem);
router.get('/api/items', getItems);
router.put('/api/items/:id', updateItem);
router.delete('/api/items/:id', deleteItem);

module.exports = router;
