const express =  require('express');
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

// static folder setup
// app.use(express.static(path.join(__dirname,'public')))
let posts = [
    {id: 1, title:'Post one'},
    {id: 2, title:'Post two'},
    {id: 3, title:'Post three'}
]

// get all post
app.get('/api/posts',(req,res) => {
    res.json(posts)
})

// get single post
app.get('/api/posts/:id',(req,res) => {
    const id = parseInt(req.params.id)
    res.json(posts.filter((post) => post.id === id))
})

app.listen(port, () => {
    console.log(`This PORT is running ${port}`);   
})
