import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema({
    articleId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    // content: {
    //   type: String,
    //   required: true,
    // },
    // author: {
    //   type: String,
    //   required: true,
    // },
    // category: {
    //   type: String,
    //   required: true,
    // },
    // summary: {
    //   type: String,
    //   required: true,
    // },
    imageURL: {
      type: String,
      required: true,
    },
    year: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
  });

const Article = mongoose.model('Article', articleSchema)

export default Article