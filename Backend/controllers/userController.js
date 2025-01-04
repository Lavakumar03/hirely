const User = require('../models/User'); // Adjust path to your model file

// Add a new user
exports.addUser = async (req, res) => {
  try {
    const { user_id, name, location, mail, phone_number, password } = req.body;
    const pic = req.file ? req.file.buffer : null; // Store image buffer if uploaded

    const newUser = new User({
      user_id,
      name,
      location,
      mail,
      phone_number,
      password,
      pic
    });

    await newUser.save();
    res.status(201).send('User added successfully!');
  } catch (err) {
    res.status(500).send('Error adding user: ' + err.message);
  }
};

// Remove a user by ID
exports.removeUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const deletedUser = await User.findOneAndDelete({ user_id });

    if (!deletedUser) {
      return res.status(404).send('User not found');
    }

    res.status(200).send('User removed successfully');
  } catch (err) {
    res.status(500).send('Error removing user: ' + err.message);
  }
};

// Edit a user by ID
exports.editUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const updates = req.body;
    if (req.file) {
      updates.pic = req.file.buffer; // Update the image if uploaded
    }

    const updatedUser = await User.findOneAndUpdate({ user_id }, updates, {
      new: true // Return the updated user
    });

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }

    res.status(200).send('User updated successfully');
  } catch (err) {
    res.status(500).send('Error updating user: ' + err.message);
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await User.findOne({ user_id });

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).send('Error retrieving user: ' + err.message);
  }
};

// Get all users (optional, for testing)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send('Error retrieving users: ' + err.message);
  }
};
