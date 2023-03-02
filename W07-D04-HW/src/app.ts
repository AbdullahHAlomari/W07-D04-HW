import express, {Application} from 'express';
import useRoutes from './routes/userRoute'
import connectDB from './config/db'
const app:Application = express()
app.use(express.json())
connectDB()
app.use('/', useRoutes)
let port:number = 3008
app.listen(port,()=> console.log(`Express started ${port}`))