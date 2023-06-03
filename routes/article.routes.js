import express from 'express';
import ArticleController from '../../BACK/controllers/article.controller.js';

const router = express.Router();

// Article Routes

// router.get('/articles/:id', ArticleController.getArticlesById);
router.get('/articles', ArticleController.getArticlesByYearAndMonth);
router.get('/articles/:id', ArticleController.getArticleById);
router.post('/articles/:id/save', ArticleController.saveArticle);
router.delete('/articles/:id/delete', ArticleController.deleteArticle);

export default router;
