import express from"express"

import colors from"colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import cors from "cors"
// configure env
dotenv.config();

// database connecting

connectDB();

const app=express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("/api/v1/auth",authRoutes);

const PORT=process.env.PORT || 8080


// rest api
app.get('/',(req,res)=>{
    res.send("<h1>welcome</h1>")
})



app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgGreen.white)
})