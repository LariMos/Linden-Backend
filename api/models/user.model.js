import mongoose from 'mongoose'

const superuserSchema = new mongoose.Schema({
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

  const Superuser = mongoose.model('Superuser', superuserSchema)
 
export default Superuser