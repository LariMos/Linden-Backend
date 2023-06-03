import mongoose from 'mongoose';

const Article = new mongoose.Schema({
  title: String,
  date: Date,
  author: String,
  summary: String,
  imageURL: String,
  webURL: String
});

export default mongoose.model('NYTarticle', Article);
