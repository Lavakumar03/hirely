const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController'); // Adjust the path to your controller
const router = express.Router();

// Multer setup for handling image uploads
const upload = multer({ storage: multer.memoryStorage() }); // Using memory storage to store images in the buffer

// Route to add a new user
router.post('/add', upload.single('pic'), userController.addUser);

// Route to remove a user by user_id
router.delete('/remove/:user_id', userController.removeUser);

// Route to edit a user by user_id
router.put('/edit/:user_id', upload.single('pic'), userController.editUser);

// Route to get a user by user_id
router.get('/:user_id', userController.getUserById);

// Route to get all users (optional, for testing purposes)
router.get('/', userController.getAllUsers);

module.exports = router;
