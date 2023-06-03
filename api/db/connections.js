import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const DATABASE_URI = process.env.MONGODB_URI 

let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
 
mongoose.connect(DATABASE_URI, mongooseConfig)

mongoose.connection.on('connected', () => {console.log('MongoDB Connected')})
mongoose.connection.on('disonnected', () => {console.log('MongoDB Disconnected!')})
mongoose.connection.on('error', (error) => {console.log('MongoDB Connection Error', error)})


export default mongoose.connection 
