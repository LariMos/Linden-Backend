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
      const userId = req.user.id; // Assuming implemented authentication and have access to the user ID
      const updatedProfile = req.body;

      // Update the user's profile information
      const user = await User.findByIdAndUpdate(userId, updatedProfile, { new: true });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default UserController;
