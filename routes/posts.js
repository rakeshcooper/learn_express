import express from 'express'
const router = express.Router()
import { getPosts,getSinglePosts,createPost,updatePost,deletePost } from '../controllers/postController.js'


// get all post
router.get('/',getPosts)


// get single post
router.get('/:id',getSinglePosts)


// post request
router.post('/',createPost)


// put request update post
router.put('/:id',updatePost)


// delete request
router.delete('/:id',deletePost)

export default router;