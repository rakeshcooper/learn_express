import express from 'express'
const router = express.Router()


let posts = [
    {id: 1, title:'Post one'},
    {id: 2, title:'Post two'},
    {id: 3, title:'Post three'}
]

// get all post
router.get('/',(req,res) => {
    console.log(req.query);
    const limit = parseInt(req.query.limit)
    
    if(!isNaN(limit) && limit > 0){
       return res.status(200).json(posts.slice(0,limit))    
    } 
     res.status(200).json(posts)
})

// get single post
router.get('/:id',(req,res) => {
    const id = parseInt(req.params.id)
    // res.status(200).json(posts.filter((post) => post.id === id))
    const post = posts.find((post) => post.id === id)
    if(!post){
      return res.status(404).json({msg:`A post with a id of ${id} was not found`})
    }   
    res.status(200).json(post)
})

// post request

router.post('/',(req,res) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    }
    if(!newPost){
        return res.status(400).json({msg: `Please include a title`})
    }
    posts.push(newPost)
    res.status(201).json(posts)
    
})

// put request update post
router.put('/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        return res.status(404).json({msg: `Entered id of ${id} not found`})
    }
    post.title = req.body.title
    res.status(200).json(posts)
})

// delete request
router.delete('/:id',(req,res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        return res.status(404).json({msg: `Entered id of ${id} not found`})
    }
    const removedData = posts.filter((post) => post.id !== id)
    res.status(200).json(removedData)
})

export default router;