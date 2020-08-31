const express = require('express');
const router = express.Router();

// @method  GET
// route    api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get a logged in user');
});

// @method  POST
// route    api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('login user');
});

module.exports = router;
