const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Item = require('../models/Item');

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find({}, 'email name profileImage role');
  res.json(users);
});

// Get all items
router.get('/items', async (req, res) => {
  const items = await Item.find({}).populate('uploadedBy', 'email');
  res.json(items);
});

// Delete a user
router.delete('/user/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

// Delete an item
router.delete('/item/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
