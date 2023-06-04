import express from 'express';
import UserController from '../controllers/user.controller.js';
import ArticleController from '../controllers/article.controller.js';

const router = express.Router();

// User Profile Routes
router.get('/profile/:userId', UserController.getUserProfile); //TESTED WORKS
router.put('/profile', UserController.updateUserProfile);
router.post('/login', UserController.logInProfile);
router.post('/articles/:id/save', ArticleController.saveArticle); //TESTED WORKS!!
router.delete('/articles/:id/delete', ArticleController.deleteArticle); //TESTED WORKS!!

 
export default router;


