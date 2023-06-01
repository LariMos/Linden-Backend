import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

// Setup dotenv
dotenv.config()

// Env variables
const DATABASE_URI = process.env.DATABASE_URI
const ENVIRONMENT = process.argv[2] || process.env.ENVIRONMENT
const COLLECTION = process.env.COLLECTION ? process.env.COLLECTION : 'test'

// Setup database
let db = mongoose.connection
db.collection(COLLECTION)
// db config
let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connect to your production db
if (ENVIRONMENT === "prod") {
    mongoose.connect(DATABASE_URI, mongooseConfig)
}
// Connect to your local db
else {
    mongoose.connect(`mongodb://127.0.0.1:27017/article`, mongooseConfig)
    console.log('I am connected')
}

export default db 