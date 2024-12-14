import express from 'express'
import path from 'path'
import posts from'./routes/posts.js'
const app = express()
const port = process.env.PORT || 5000

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// static folder setup
// app.use(express.static(path.join(__dirname,'public')))

//routes
app.use('/api/posts/', posts)

app.listen(port, () => {
    console.log(`This PORT is running ${port}`);   
})
