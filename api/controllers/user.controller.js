import Superuser from '../models/user.model.js';
import Article from '../models/article.model.js';

const UserController = {
  
//TESTED AND IT WORKS!!!
  getUserProfile: async (req, res) => {
    try {
      const userId = req.params.userId; // Retrieve the userId from route parameters
  
      // Retrieve the user's profile information
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
//TO TEST
  updateUserProfile: async (req, res) => {
    try {
      const userId = req.user.id; // 

      const updatedProfile = req.body;

      // Update the user's profile information
      const user = await User.findByIdAndUpdate(userId, updatedProfile, { new: true });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //LOG-IN
  // Route to check if username and password match
  logInProfile: async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user in the database based on the provided username
    const user = await User.findOne({ supername });

    if (user && user.password === password) {
      // Username and password match
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // Invalid username or password
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
  }

};

export default UserController;
