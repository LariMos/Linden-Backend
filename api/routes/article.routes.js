import express from 'express';
import ArticleController from '../controllers/article.controller.js';

const router = express.Router();

// Article Routes

// router.get('/articles/:id', ArticleController.getArticlesById);
router.get('/articles', ArticleController.getArticlesByYearAndMonth); //TESTED WORKS!!
router.get('/articles/:id', ArticleController.getArticleById); //TESTED WORKS!!
router.post('/articles/:id/save', ArticleController.saveArticle); //TESTED WORKS!!
router.delete('/articles/:id/delete', ArticleController.deleteArticle); //TESTED WORKS!!
 
export default router;
