const express = require('express');

const router = express.Router();

const ContactController = require('../controllers/contact');

const { authMiddleware } = require('../middlewares/authMiddleware');

const { paginationMiddleware } = require('../middlewares/paginationMiddleware');

router.post('/', authMiddleware, ContactController.createContact);

router.get('/', authMiddleware, paginationMiddleware, ContactController.getAllContact);

router.get('/:name', authMiddleware, ContactController.getContactByName);

router.put('/:name', authMiddleware, ContactController.updateContact);

router.delete('/:name', authMiddleware, ContactController.deleteContact);


module.exports = router;
