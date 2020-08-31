const express = require('express');
const router = express.Router();

// @method  GET
// route    api/contacts
// @desc    Get all contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @method  POST
// route    api/contacts
// @desc    Add new contacts
// @access  Private
router.post('/', (req, res) => {
  res.send('add contact');
});

// @method  PUT
// route    api/contacts/:id
// @desc    update contacts
// @access  Private
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @method  DELETE
// route    api/contacts/:id
// @desc    Delete contacts
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
