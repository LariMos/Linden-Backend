import mongoose from 'mongoose'

const User = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    savedArticles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
    }],
  });

  export default mongoose.model('Superuser', User);

