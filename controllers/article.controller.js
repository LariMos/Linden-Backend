import Article from '../models/article.model.js';


const ArticleController = {

  getOneArticleEasy: async (req, res) => {
    try {
      const id = req.params.id;

      // Build the query based on the provided filters
      // const query = {};

      // if (title) {
      //   query.title = { $regex: title, $options: 'i' };
      // }

      // Retrieve articles based on the specified filters (title)
      const articles = await Article.findById(id);

      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
  getArticlesByYear: async (req, res) => {
    try {
      const { year } = req.query;

      // Build the query based on the provided year
      const query = {};

      if (year) {
        // Extract the year from the date field
        query.$expr = {
          $eq: [{ $year: '$date' }, parseInt(year)],
        };
      }

      // Retrieve articles based on the specified year
      const articles = await Article.find(query);

      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },



  getArticleById: async (req, res) => {
    try {
      const articleId = req.params.id;

      // Retrieve a specific article by its ID
      const article = await Article.findById(articleId);

      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  saveArticle: async (req, res) => {
    try {
      const articleId = req.params.id;

      // Save an article to the user's saved articles list
      const userId = req.user.id; // Assuming authentication and have access to the user ID
      await User.findByIdAndUpdate(userId, { $push: { savedArticles: articleId } });

      res.status(200).json({ message: 'Article saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteArticle: async (req, res) => {
    try {
      const articleId = req.params.id;

      // Delete a saved article from the user's list
      // TO DO: Update the user document to remove the article from the saved articles array
      const userId = req.user.id; // Assuming you have implemented authentication and have access to the user ID
      await User.findByIdAndUpdate(userId, { $pull: { savedArticles: articleId } });

      res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export default ArticleController;

