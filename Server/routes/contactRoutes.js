const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Public form submission
router.post('/', contactController.addContact);

// Admin view
router.get('/', contactController.getAllContacts);

// Delete contact (optional)
router.delete('/:id', contactController.deleteContact);

module.exports = router;
