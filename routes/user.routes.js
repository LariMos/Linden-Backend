import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();

// User Profile Routes
router.get('/profile', UserController.getUserProfile);
router.put('/profile', UserController.updateUserProfile);

export default router;
