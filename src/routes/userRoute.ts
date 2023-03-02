import {getAllUser, getOneUser, createUser} from '../controller/userCont'
import {createBlog, findAllBlogs, findAllBlogsByUserId, updateBlogById} from '../controller/userBlog'

import express from 'express'
let router = express.Router()

// GET
router.get('/', getAllUser)

// GET one user
router.get('/user', getOneUser) 

// Create user
router.post('/user', createUser )

// Blog Section

// Create Blog
router.post('/blog', createBlog )

// Search blogs 
router.get('/search', findAllBlogs)
// Search by user
router.get('/searchbyuser', findAllBlogsByUserId)

// Update
router.put('/updateblog', updateBlogById)

export default router
