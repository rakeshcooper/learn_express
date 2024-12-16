let posts = [
    {id: 1, title:'Post one'},
    {id: 2, title:'Post two'},
    {id: 3, title:'Post three'}
]


//@desc Gets all posts
//@route GET /api/posts 

export const getPosts = (req,res) => {
    console.log(req.query);
    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit > 0){
       return res.status(200).json(posts.slice(0,limit))    
    } 
     res.status(200).json(posts)
}  

//@desc Gets single posts
//@route GET /api/posts/:id 

export const getSinglePosts =(req,res,next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        const error = new Error(`A post with a id of ${id} was not found`)
        error.status = 404
        return next(error)
    }   
    res.status(200).json(post)
}

//@desc Create new post
//@route POST /api/posts/

export const createPost = (req,res,next) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    }
    if(!newPost.title){
        const error = new Error(`Please include a title`)
        error.status = 400
        return next(error)
    }
    posts.push(newPost)
    res.status(201).json(posts)    
}


//@desc Update post
//@route PUT /api/posts/
export const updatePost = (req,res,next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        const error = new Error(`Entered id of ${id} not found`)
        error.status = 404
        return next(error)
    }
    post.title = req.body.title
    res.status(200).json(posts)
}


//@desc Delete post
//@route DELETE /api/posts/

export const deletePost = (req,res,next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        const error = new Error(`Entered id of ${id} not found`)
        error.status = 404
        return next(error)
    }
    const removedData = posts.filter((post) => post.id !== id)
    res.status(200).json(removedData)
}


// export default { getPosts, getSinglePosts,createPost,updatePost,deletePost }