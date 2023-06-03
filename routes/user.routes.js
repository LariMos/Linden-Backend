import express from 'express';
import UserController from '../../BACK/controllers/user.controller.js';
import ArticleController from '../../BACK/controllers/article.controller.js';

const router = express.Router();

// User Profile Routes
router.get('/profile', UserController.getUserProfile);
router.put('/profile', UserController.updateUserProfile);
router.post('/articles/:id/save', ArticleController.saveArticle);


export default router;
