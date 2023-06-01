import express from 'express';
import ArticleController from '../controllers/article.controller.js';

const router = express.Router();

// Article Routes
router.get('/articles', ArticleController.getArticles);
router.get('/articles/:id', ArticleController.getArticleById);
router.post('/articles/:id/save', ArticleController.saveArticle);
router.delete('/articles/:id/delete', ArticleController.deleteArticle);

export default router;
