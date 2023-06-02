import mongoose from 'mongoose'

const Article = new mongoose.Schema({
    _id: {
      type: String,
    //   required: true,
    //   unique: true,
    },
    title: {
      type: String
    //   required: true,
    },
    date: {
      type: Date
    //   required: true,
    },
    content: {
      type: String
    //   required: true,
    },
    author: {
      type: String
    //   required: true,
    },
    category: {
      type: String
    //   required: true,
    },
    summary: {
      type: String
    },
    imageURL: {
      type: String
    }
  });

 export default mongoose.model('article', Article);



// import mongoose from 'mongoose'

// const Article = new mongoose.Schema({
//     _id: {
//       type: String,
//     //   required: true,
//     //   unique: true,
//     },
//     title: {
//       type: String
//     //   required: true,
//     },
//     date: {
//       type: Date
//     //   required: true,
//     },
//     content: {
//       type: String
//     //   required: true,
//     },
//     author: {
//       type: String
//     //   required: true,
//     },
//     category: {
//       type: String
//     //   required: true,
//     },
//     summary: {
//       type: String
//     },
//     imageURL: {
//       type: String
//     }
//   });

// const Article = mongoose.model('Article', articleSchema)

// export default Article