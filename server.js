import express from 'express'
import path from 'path'
import posts from'./routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'
const app = express()
const port = process.env.PORT || 5000

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// logger middleware
app.use(logger)

// static folder setup
// app.use(express.static(path.join(__dirname,'public')))

//routes
app.use('/api/posts/', posts)

//errorHandler
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`This PORT is running ${port}`);   
})
