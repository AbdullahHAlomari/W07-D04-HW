import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();
import express, {Request,Response} from 'express';


export const createBlog = async (req: Request, res: Response) => {
    try {
      const {title, user_id} = req.body;
      await prisma.blog.create({
        data:{
            title,
            user_id
        }
      });
  
      res.json({
        message: "Blog created successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const findAllBlogs = async (req: Request, res: Response) => {
    try {
      const search = await prisma.blog.findMany({});
      res.json(search);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  export const findAllBlogsByUserId = async (req: Request, res: Response) => {
    try {
      const { userID } = req.body;
      const blogs = await prisma.blog.findMany({
        where: {
          user_id: userID,
        },
        select:{
            title: true
        }
      });
      res.json(blogs);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  // Update blog
  export const updateBlogById = async (req: Request, res: Response) => {
    try {
      const { id, title } = req.body;
      const updatedBlog = await prisma.blog.update({
        where: {
          id,
        },
        data: {
          title,
        },
      });
      res.json(updatedBlog);
    } catch (error) {
      console.log(error);
    }
  };
  
  // Deleted all blogs
  
  export const deletBlog = async (req: Request, res: Response) => {
    try {
        const {id} = req.body;
        const blogsdelete = prisma.blog.delete({
            where:{
                id,
            }
        })
        res.json(blogsdelete)
    } catch (error) {
      console.log(error);
    }
  };

  // Delete one blog
  
//   export const deletBlog = async (req: Request, res: Response) => {
//     try {
//       const { id } = req.params;
//       await prisma.blog.delete({
//         where: {
//           user_id: id,
//         },
//       });
//       res.json({
//         message: " Your all blogs are deleted!",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
