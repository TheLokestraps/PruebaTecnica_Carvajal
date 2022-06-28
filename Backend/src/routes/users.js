const express = require('express');

const router = express.Router();

const UsersController = require('../controllers/users');

const { authMiddleware } = require('../middlewares/authMiddleware');

const { paginationMiddleware } = require('../middlewares/paginationMiddleware');

router.get('/all', authMiddleware, paginationMiddleware, UsersController.getAllUsers);

router.get('/:id', authMiddleware, UsersController.getUserById);

router.put('/:id', authMiddleware, UsersController.updateUser);

router.delete('/:id', authMiddleware, UsersController.deactivateUser);

router.post('/', UsersController.createUser);

router.delete('/:id', UsersController.deactivateUser);

router.put('/:id', UsersController.updateUser);

router.post('/login', UsersController.loginUser);

router.post('/logout', UsersController.logoutUser);


module.exports = router;
