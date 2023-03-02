import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();
import express, {Request,Response} from 'express';
import bcrypt from "bcrypt";
import { createUUID } from '../config/db';


export const getAllUser =  async (req:Request, res:Response)=>{
    let users = await prisma.user.findMany()
    res.json(users)
}

export const getOneUser = async (req:Request, res:Response)=>{
    const {email} = req.body;

    let user = await prisma.user.findFirst({
        where:{
            email: email
        }
    });
    res.json(user)
}


export const createUser = async (req: Request, res: Response) => {
    
      const { username, password, email, role } = req.body
      const hashedPassword = bcrypt.hashSync(password, 10)
      const user = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          email,
          role,
        },
      })
      res.json({ message: 'User created', user })
}
