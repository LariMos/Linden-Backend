import Article from '../models/article.model.js';
import User from '../models/user.model.js';


const ArticleController = {

  //TESTED AND IT WORKS!!!!
  getArticlesByYearAndMonth: async (req, res) => { 
    try {
      const { year, month } = req.query;
  
      // Build the query based on the provided year and month
      const query = {};
  
      if (year) {
        // Extract the year from the date field
        query.$expr = {
          $eq: [{ $year: '$date' }, parseInt(year)],
        };
      }
  
      if (month) {
        // Extract the month from the date field
        query.$expr = {
          $and: [
            query.$expr,
            { $eq: [{ $month: '$date' }, parseInt(month)] },
          ],
        };
      }
  
      // Retrieve articles based on the specified year and month
      const articles = await Article.find(query);
  
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },


//TESTED AND IT WORKS!!!!
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

//TESTED AND IT WORKS!!!!
  saveArticle: async (req, res) => {
    try {
      const articleId = req.params.id;
      const userId = '647bbd1c2e2923c7c339a7c1'; // Assuming you have the "superuser" ID explicitly
  
      console.log('Article ID:', articleId);
      console.log('User ID:', userId);
  
      // Save an article to the user's saved articles list
      await User.findByIdAndUpdate(
        userId,
        { $addToSet: { savedArticles: articleId } }
      );
  
      res.status(200).json({ message: 'Article saved successfully' });
    } catch (error) {
      console.error('Error saving article:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
   
 //TESTED AND IT WORKS!!!! 
  deleteArticle: async (req, res) => {
    try {
      const articleId = req.params.id;
      const userId = '647bbd1c2e2923c7c339a7c1'; // Assuming you have the "superuser" ID explicitly
  
      console.log('Article ID:', articleId);
      console.log('User ID:', userId);
  
      // Save an article to the user's saved articles list
      await User.findByIdAndUpdate(
        userId,
        { $pull: { savedArticles: articleId } }
      );
  
      res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
      console.error('Error deleting article:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

}


export default ArticleController;
